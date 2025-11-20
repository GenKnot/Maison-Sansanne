"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState('zh');

    useEffect(() => {
        // 从localStorage读取保存的语言设置
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale && ['zh', 'en', 'fr'].includes(savedLocale)) {
            setLocale(savedLocale);
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('zh')) {
                setLocale('zh');
            } else if (browserLang.startsWith('fr')) {
                setLocale('fr');
            } else {
                setLocale('en');
            }
        }
    }, []);

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[locale];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
