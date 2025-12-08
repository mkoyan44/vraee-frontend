import { NextRequest, NextResponse } from "next/server";

// Пути, доступные только авторизованным пользователям
const protectedRoutes = ["/profile"];

// Пути, доступные только админам
const adminRoutes = ["/dashboard"];

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value; // Берём токен из cookie
    const userRole = req.cookies.get("role")?.value; // Берём роль пользователя

    const { pathname } = req.nextUrl;

    // Логи для отладки
    console.log("Middleware triggered for pathname:", pathname);

    // Если страница требует авторизации, но токена нет — редирект на логин
    if (protectedRoutes.includes(pathname) && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Если страница требует роль "admin", но пользователь не админ — редирект
    if (adminRoutes.includes(pathname) && userRole !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next(); // Разрешаем доступ
}

// Определяем, на какие страницы распространяется Middleware
export const config = {
    matcher: [
        "/profile",              // Защищённый маршрут
        "/dashboard",            // Админ маршрут
        "/((?!admin_hftasd32cdv|_next/static|_next/image|favicon.ico).*)", // Все пути, кроме admin и служебных
    ],
};