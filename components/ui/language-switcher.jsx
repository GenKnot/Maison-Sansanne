"use client";
import { useLanguage } from '@/lib/i18n/context';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
    const { locale, changeLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'zh', label: '中文', flag: '🇨🇳' },
        { code: 'en', label: 'EN', flag: '🇬🇧' },
        { code: 'fr', label: 'FR', flag: '🇫🇷' },
    ];

    const currentLang = languages.find(lang => lang.code === locale);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (code) => {
        changeLocale(code);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className={`language-current ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select language"
            >
                {currentLang?.label}
                <i className="fas fa-angle-down" />
            </button>
            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`language-option ${locale === lang.code ? 'active' : ''}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
