import React from 'react';
import styles from "@/assets/styles/client/components/footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    const menus = [
        {
            'id': '1',
            'title': 'Services',
            'menu': [
                {
                    'id': '1',
                    'label': '3D Modeling',
                    'url': '/services/modeling',
                },
                {
                    'id': '2',
                    'label': 'Jewelry Sketching',
                    'url': '/services/sketching',
                },
                {
                    'id': '3',
                    'label': 'Photorealistic Rendering',
                    'url': '/services/rendering',
                },
                {
                    'id': '4',
                    'label': 'Jewelry Animation',
                    'url': '/services/animation',
                },
                {
                    'id': '5',
                    'label': '3D CAD Design',
                    'url': '/services/cad-design',
                },
                {
                    'id': '6',
                    'label': 'Custom Designs',
                    'url': '/services/3d-design',
                },
            ],
        },
        {
            'id': '2',
            'title': 'Technology',
            'menu': [
                {
                    'id': '1',
                    'label': 'Blender',
                    'url': '/client/blender',
                },
                {
                    'id': '2',
                    'label': 'Cinema 4D',
                    'url': '/client/cinema-4d',
                },
                {
                    'id': '3',
                    'label': 'ZBrush',
                    'url': '/client/zbrush',
                },
                {
                    'id': '4',
                    'label': 'Rhino',
                    'url': '/client/rhino',
                },
                {
                    'id': '5',
                    'label': 'After Effects',
                    'url': '/client/after-effects',
                },
                {
                    'id': '6',
                    'label': 'Matrix Platform',
                    'url': '/client/matrix',
                },
            ],
        },
        {
            'id': '3',
            'title': 'Company',
            'menu': [
                {
                    'id': '1',
                    'label': 'About Us',
                    'url': '/#hero',
                },
                {
                    'id': '2',
                    'label': 'Portfolio',
                    'url': '/portfolio',
                },
                {
                    'id': '3',
                    'label': 'Programs',
                    'url': '/#programs-used',
                },
                {
                    'id': '4',
                    'label': 'Contact',
                    'url': '/#contact',
                },
            ],
        },
        {
            'id': '4',
            'title': 'Resources',
            'menu': [
                {
                    'id': '1',
                    'label': 'Help & FAQ',
                    'url': '/#faq',
                },
                {
                    'id': '2',
                    'label': 'Pricing Calculator',
                    'url': '/pricing',
                },
                {
                    'id': '3',
                    'label': 'Our Process',
                    'url': '/#how-it-works',
                },
                {
                    'id': '4',
                    'label': 'Reviews',
                    'url': '/#reviews',
                },
                {
                    'id': '5',
                    'label': 'File Formats',
                    'url': '/#faq',
                },
            ],
        },
    ];
    const socials = [
        {
            'id': 1,
            'icon': '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0002 2.3335C7.55666 2.3335 2.3335 7.55666 2.3335 14.0002C2.3335 19.823 6.6 24.6495 12.1778 25.5257V17.3718H9.2145V14.0002H12.1778V11.43C12.1778 8.50633 13.9185 6.89166 16.5843 6.89166C17.8607 6.89166 19.1953 7.11916 19.1953 7.11916V9.98916H17.7253C16.2752 9.98916 15.8237 10.8887 15.8237 11.8115V14.0002H19.0588L18.542 17.3718H15.8237V25.5257C21.4003 24.6507 25.6668 19.8218 25.6668 14.0002C25.6668 7.55666 20.4437 2.3335 14.0002 2.3335Z" fill="currentColor"/></svg>',
            'url': '#',
        },
        {
            'id': 2,
            'icon': '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_197_572)"><path d="M14.0002 2.3335C17.17 2.3335 17.5655 2.34516 18.8092 2.4035C20.0517 2.46183 20.8975 2.65666 21.6418 2.946C22.4118 3.24233 23.0605 3.64366 23.7092 4.29116C24.3024 4.87437 24.7614 5.57985 25.0543 6.3585C25.3425 7.10166 25.5385 7.94866 25.5968 9.19116C25.6517 10.4348 25.6668 10.8303 25.6668 14.0002C25.6668 17.17 25.6552 17.5655 25.5968 18.8092C25.5385 20.0517 25.3425 20.8975 25.0543 21.6418C24.7623 22.4209 24.3031 23.1265 23.7092 23.7092C23.1258 24.3022 22.4204 24.7612 21.6418 25.0543C20.8987 25.3425 20.0517 25.5385 18.8092 25.5968C17.5655 25.6517 17.17 25.6668 14.0002 25.6668C10.8303 25.6668 10.4348 25.6552 9.19116 25.5968C7.94866 25.5385 7.10283 25.3425 6.3585 25.0543C5.57954 24.762 4.87394 24.3029 4.29116 23.7092C3.6978 23.126 3.23875 22.4205 2.946 21.6418C2.65666 20.8987 2.46183 20.0517 2.4035 18.8092C2.34866 17.5655 2.3335 17.17 2.3335 14.0002C2.3335 10.8303 2.34516 10.4348 2.4035 9.19116C2.46183 7.9475 2.65666 7.10283 2.946 6.3585C3.23794 5.57937 3.6971 4.8737 4.29116 4.29116C4.87411 3.6976 5.57966 3.23851 6.3585 2.946C7.10283 2.65666 7.9475 2.46183 9.19116 2.4035C10.4348 2.34866 10.8303 2.3335 14.0002 2.3335ZM14.0002 8.16683C12.4531 8.16683 10.9693 8.78141 9.87537 9.87537C8.78141 10.9693 8.16683 12.4531 8.16683 14.0002C8.16683 15.5473 8.78141 17.031 9.87537 18.125C10.9693 19.2189 12.4531 19.8335 14.0002 19.8335C15.5473 19.8335 17.031 19.2189 18.125 18.125C19.2189 17.031 19.8335 15.5473 19.8335 14.0002C19.8335 12.4531 19.2189 10.9693 18.125 9.87537C17.031 8.78141 15.5473 8.16683 14.0002 8.16683ZM21.5835 7.87516C21.5835 7.48839 21.4299 7.11746 21.1564 6.84397C20.8829 6.57047 20.5119 6.41683 20.1252 6.41683C19.7384 6.41683 19.3675 6.57047 19.094 6.84397C18.8205 7.11746 18.6668 7.48839 18.6668 7.87516C18.6668 8.26194 18.8205 8.63287 19.094 8.90636C19.3675 9.17985 19.7384 9.3335 20.1252 9.3335C20.5119 9.3335 20.8829 9.17985 21.1564 8.90636C21.4299 8.63287 21.5835 8.26194 21.5835 7.87516ZM14.0002 10.5002C14.9284 10.5002 15.8187 10.8689 16.475 11.5253C17.1314 12.1817 17.5002 13.0719 17.5002 14.0002C17.5002 14.9284 17.1314 15.8187 16.475 16.475C15.8187 17.1314 14.9284 17.5002 14.0002 17.5002C13.0719 17.5002 12.1817 17.1314 11.5253 16.475C10.8689 15.8187 10.5002 14.9284 10.5002 14.0002C10.5002 13.0719 10.8689 12.1817 11.5253 11.5253C12.1817 10.8689 13.0719 10.5002 14.0002 10.5002Z" fill="currentColor"/></g><defs><clipPath id="clip0_197_572"><rect width="28" height="28" fill="currentColor"/></clipPath></defs></svg>',
            'url': '#',
        },
    ];
    const xmas = new Date();
    const year = xmas.getFullYear();
    return (
    <footer id="contact" className={`${styles.footer} scheme-dark background`}>
            <div className="container">
                {/* Menu Bar at Top */}
                <div className={styles.menu_bar}>
                    <div className={styles.menus}>
                        {
                            menus.map((menu) => {
                                return (
                                    <nav key={menu.id}>
                                        <div className="large-font subtitle mb-3">{menu.title}</div>
                                        <ul>
                                            {
                                                menu.menu.map((item) => {
                                                    return (
                                                        <li key={item.id}>
                                                            <Link href={item.url}
                                                                  className="hovered_link">{item.label}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </nav>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Main Footer Grid */}
                <div className={styles.wrapper}>
                    <div className={styles.contact_info}>
                        <div className="large-font subtitle mb-3">Contact us</div>
                        <p>
                            <Link href="tel:+5055551234" className="hovered_link">+505-555-1234</Link>
                            <br />
                            <Link href="mailto:info@vraee-jewelry3d.com" className="hovered_link">info@vraee-jewelry3d.com</Link>
                        </p>
                    </div>

                    <div className={styles.address_info}>
                        <div className="large-font subtitle mb-3">Address</div>
                        <p>308 Negra Arroyo Lane<br />Albuquerque, New Mexico 87104</p>
                    </div>

                    <div className={styles.newsletter}>
                        <div className={styles.newsletter_wrapper}>
                            <div className="rte">
                                <h3>Stay Updated</h3>
                                <p>Get the latest in jewelry 3D technology.</p>
                            </div>
                            <form action="">
                                <input type="email" placeholder="Enter your email"/>
                                <button type="submit" className="btn-primary w-full mb-2">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <div className={styles.social_wrapper}>
                            <div><strong>Follow Us</strong></div>
                            <ul className={styles.social_list}>
                                {
                                    socials.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <Link href={item.url} target="_blank"
                                                      dangerouslySetInnerHTML={{__html: item.icon}}></Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright_bottom}>
                <div className="container">
                    <div className={styles.copyright}>
                        <p>© {year} Vraee Jewelry 3D. All rights reserved.</p>
                        <span className={styles.company}>Albuquerque, New Mexico</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
