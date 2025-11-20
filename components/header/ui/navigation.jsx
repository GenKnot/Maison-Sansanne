"use client";
import navigation from "@/data/navigation";
import { isParentActive } from "@/lib/is-menu-active";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggles/toggleSlice";
import { useLanguage } from "@/lib/i18n/context";

export default function Navigation() {
    const path = usePathname();
    const dispatch = useDispatch();
    const { t } = useLanguage();

    const closeMenu = () => {
        dispatch(toggleSidebar());
    };

    return (
        <>
            <div className="mobile-menu-head">
                <div className="mobile-menu-logo">
                    <img src="/Logo33.png" alt="33 Studio" style={{ height: '40px', width: 'auto' }} />
                </div>
                <div className="mobile-menu-close" onClick={closeMenu}>×</div>
            </div>
            <ul className="site-menu-main">
                {navigation?.map((item, i) => (
                    <li key={i} className="nav-item nav-item-has-children">
                        {!item.dropdown ? (
                            <Link
                                href={item.url}
                                className={`nav-link-item drop-trigger ${
                                    path === item.url ? "ui-nav-active" : ""
                                }`}
                            >
                                {t(item.labelKey)}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={item.url}
                                    className={`nav-link-item drop-trigger ${
                                        isParentActive(item, path)
                                            ? "ui-nav-active"
                                            : ""
                                    }`}
                                >
                                    {t(item.labelKey)}
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <div className="sub-menu">
                                    <ul className="sub-menu_list">
                                        {item.dropdown?.map((item2, i2) => (
                                            <li key={i2} className="sub-menu_item">
                                                <Link href={item2.url}>
                                                    <span
                                                        className={`menu-item-text ${
                                                            item2.url === path ? "active" : ""
                                                        }`}
                                                    >
                                                        {t(item2.labelKey)}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
