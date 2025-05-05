"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserDTO from "@/interfaces/userDTO";
import { getUserData } from "@/services/api";
import { useUserStore } from "@/store/useUserStore";

const Profile = () => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { role } = useUserStore();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserData();
                setUser(data);
            } catch (err) {
                setError("Ошибка загрузки профиля.");
            }
        };
        fetchUser();
    }, [router]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Профиль клиента {role}</h1>
            <p>Email: {user.email}</p>
            <p>Роль: {user.role}</p>
        </div>
    );
};

export default Profile;