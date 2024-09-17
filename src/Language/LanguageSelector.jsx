import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const languages = [
    { code: "en", lang: "EN" },
    { code: "ru", lang: "RU" }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language);

    useEffect(() => {
        setActiveLang(i18n.language);
    }, [i18n.language]);


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            {languages.map((lng) => (
                <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                >
                    <p className={`flex items-center justify-center gap-4 ml-2 ${activeLang === lng.code ? " rounded-[1px] border-b-[3px] border-[#0085F9] mb-[4px]" : ""}`}>
                        {lng.lang}
                    </p>
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
