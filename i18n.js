import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: {
                    NAV_HOME: "Inicio", NAV_SERVICES: "Servicios", NAV_PORTFOLIO: "Proyectos", NAV_CONTACT: "Contacto",
                    HERO_T1: "Detallado", HERO_TG: "profesional", HERO_T2: "en Tenerife", HERO_SUB: "Cuidado premium para su vehículo. Cerámica, PDR y restauración.", HERO_CTA: "Solicitar cita",
                    S_TITLE: "Nuestros", S_TITLE_GLOW: "Servicios",
                    SER_1_T: "Cerámica", SER_1_D: "Protección premium contra rayos UV y arañazos.", SER_1_P: "Desde 450 €",
                    SER_2_T: "PDR", SER_2_D: "Eliminación de abolladuras sin necesidad de pintar.", SER_2_P: "Individual",
                    SER_3_T: "Interior", SER_3_D: "Restauración profunda de cuero y limpieza de tela.", SER_3_P: "Desde 100 €",
                    SER_4_T: "Faros", SER_4_D: "Pulido profesional y protección de óptica.", SER_4_P: "Desde 35 €",
                    SER_5_T: "Vinilo", SER_5_D: "Cambio de color y protección total de carrocería.", SER_5_P: "Consultar",
                    SER_6_T: "Motor", SER_6_D: "Limpieza detallada del vano motor con seguridad.", SER_6_P: "Desde 50 €",
                    SER_7_T: "Cristales", SER_7_D: "Tratamiento repelente al agua y sellado.", SER_7_P: "Desde 30 €",
                    SER_8_T: "Ozono", SER_8_D: "Desinfección total y eliminación de olores.", SER_8_P: "Desde 25 €",
                    GAL_TITLE_1: "Nuestros", GAL_TITLE_GLOW: "Proyectos", GAL_SUB: "Trabajo de precisión",
                    GAL_1: "CERÁMICA PREMIUM", GAL_2: "REPARACIÓN PDR", GAL_3: "DETALLADO DE INTERIOR", GAL_4: "PULIDO DE FAROS",
                    GAL_LINK: "VER PROYECTO →",
                    CONT_TITLE: "Contacto", CONT_ADDR: "C. de Valois, 33, 38400 Puerto de la Cruz", CONT_HOURS: "Lunes - Viernes: 09:00 - 17:00", CONT_WA: "WhatsApp",
                    FOOTER_R: "© 2026 Auto Detailing. Todos los derechos reservados.", FOLLOW: "SÍGUENOS"
                }
            },
            ru: {
                translation: {
                    NAV_HOME: "Главная", NAV_SERVICES: "Услуги", NAV_PORTFOLIO: "Работы", NAV_CONTACT: "Контакты",
                    HERO_T1: "Профессиональный", HERO_TG: "детейлинг", HERO_T2: "на Тенерифе", HERO_SUB: "Премиальный уход за авто. Керамика, PDR и реставрация.", HERO_CTA: "Записаться",
                    S_TITLE: "Наши", S_TITLE_GLOW: "Услуги",
                    SER_1_T: "Керамика", SER_1_D: "Премиальная защита от УФ и царапин.", SER_1_P: "От 450 €",
                    SER_2_T: "PDR", SER_2_D: "Удаление вмятин без покраски.", SER_2_P: "Индивидуально",
                    SER_3_T: "Салон", SER_3_D: "Реставрация кожи и глубокая химчистка.", SER_3_P: "От 100 €",
                    SER_4_T: "Фары", SER_4_D: "Полировка и защита оптики.", SER_4_P: "От 35 €",
                    SER_5_T: "Винил", SER_5_D: "Оклейка пленкой и смена цвета кузова.", SER_5_P: "Уточняйте",
                    SER_6_T: "Двигатель", SER_6_D: "Детейлинг-мойка подкапотного пространства.", SER_6_P: "От 50 €",
                    SER_7_T: "Стекла", SER_7_D: "Антидождь и защитные покрытия.", SER_7_P: "От 30 €",
                    SER_8_T: "Озон", SER_8_D: "Дезинфекция и удаление запахов.", SER_8_P: "От 25 €",
                    GAL_TITLE_1: "Наши", GAL_TITLE_GLOW: "Работы", GAL_SUB: "Точность в деталях",
                    GAL_1: "ПРЕМИУМ КЕРАМИКА", GAL_2: "УДАЛЕНИЕ ВМЯТИН", GAL_3: "ДЕТЕЙЛИНГ САЛОНА", GAL_4: "ПОЛИРОВКА ФАР",
                    GAL_LINK: "ПОДРОБНЕЕ →",
                    CONT_TITLE: "Контакты", CONT_ADDR: "C. de Valois, 33, 38400 Пуэрто-де-ла-Крус", CONT_HOURS: "Пн - Пт: 09:00 - 17:00", CONT_WA: "WhatsApp",
                    FOOTER_R: "© 2026 Auto Detailing. Все права защищены.", FOLLOW: "МЫ В СЕТЯХ"
                }
            },
            en: {
                translation: {
                    NAV_HOME: "Home", NAV_SERVICES: "Services", NAV_PORTFOLIO: "Portfolio", NAV_CONTACT: "Contact",
                    HERO_T1: "Professional", HERO_TG: "detailing", HERO_T2: "in Tenerife", HERO_SUB: "Premium car care. Ceramic, PDR and restoration.", HERO_CTA: "Book Now",
                    S_TITLE: "Our", S_TITLE_GLOW: "Services",
                    SER_1_T: "Ceramic", SER_1_D: "Premium UV and scratch protection.", SER_1_P: "From 450 €",
                    SER_2_T: "PDR", SER_2_D: "Paintless dent removal.", SER_2_P: "Individual",
                    SER_3_T: "Interior", SER_3_D: "Leather restoration and deep cleaning.", SER_3_P: "From 100 €",
                    SER_4_T: "Headlights", SER_4_D: "Professional polishing and protection.", SER_4_P: "From 35 €",
                    SER_5_T: "Vinyl", SER_5_D: "Color change and body protection.", SER_5_P: "Consult",
                    SER_6_T: "Engine", SER_6_D: "Safe detailed engine bay cleaning.", SER_6_P: "From 50 €",
                    SER_7_T: "Windows", SER_7_D: "Rain repellent and glass sealing.", SER_7_P: "From 30 €",
                    SER_8_T: "Ozone", SER_8_D: "Total disinfection and odor removal.", SER_8_P: "From 25 €",
                    GAL_TITLE_1: "Our", GAL_TITLE_GLOW: "Projects", GAL_SUB: "Precision Work",
                    GAL_1: "PREMIUM CERAMIC", GAL_2: "PDR REPAIR", GAL_3: "INTERIOR DETAILING", GAL_4: "HEADLIGHT POLISHING",
                    GAL_LINK: "VIEW PROJECT →",
                    CONT_TITLE: "Contact", CONT_ADDR: "C. de Valois, 33, 38400 Puerto de la Cruz", CONT_HOURS: "Mon - Fri: 09:00 - 17:00", CONT_WA: "WhatsApp",
                    FOOTER_R: "© 2026 Auto Detailing. All rights reserved.", FOLLOW: "FOLLOW US"
                }
            },
            de: {
                translation: {
                    NAV_HOME: "Startseite", NAV_SERVICES: "Leistungen", NAV_PORTFOLIO: "Portfolio", NAV_CONTACT: "Kontakt",
                    HERO_T1: "Professionelles", HERO_TG: "detailing", HERO_T2: "auf Teneriffa", HERO_SUB: "Premium-Pflege. Keramik, PDR und Restaurierung.", HERO_CTA: "Termin buchen",
                    S_TITLE: "Unsere", S_TITLE_GLOW: "Leistungen",
                    SER_1_T: "Keramik", SER_1_D: "Premium UV- und Kratzschutz.", SER_1_P: "Ab 450 €",
                    SER_2_T: "PDR", SER_2_D: "Dellenentfernung ohne Lackieren.", SER_2_P: "Individuell",
                    SER_3_T: "Innenraum", SER_3_D: "Lederrestaurierung und Tiefenreinigung.", SER_3_P: "Ab 100 €",
                    SER_4_T: "Scheinwerfer", SER_4_D: "Politur und Optikschutz.", SER_4_P: "Ab 35 €",
                    SER_5_T: "Vinyl", SER_5_D: "Farbwechsel und Karosserieschutz.", SER_5_P: "Anfrage",
                    SER_6_T: "Motor", SER_6_D: "Sichere Motorraumreinigung.", SER_6_P: "Ab 50 €",
                    SER_7_T: "Scheiben", SER_7_D: "Regenabweisende Versiegelung.", SER_7_P: "Ab 30 €",
                    SER_8_T: "Ozon", SER_8_D: "Desinfektion und Geruchsentfernung.", SER_8_P: "Ab 25 €",
                    GAL_TITLE_1: "Unsere", GAL_TITLE_GLOW: "Projekte", GAL_SUB: "Präzisionsarbeit",
                    GAL_1: "PREMIUM KERAMIK", GAL_2: "PDR REPARATUR", GAL_3: "INNENRAUM DETAILING", GAL_4: "SCHEINWERFER POLITUR",
                    GAL_LINK: "PROJEKT ANSEHEN →",
                    CONT_TITLE: "Kontakt", CONT_ADDR: "C. de Valois, 33, 38400 Puerto de la Cruz", CONT_HOURS: "Mo - Fr: 09:00 - 17:00", CONT_WA: "WhatsApp",
                    FOOTER_R: "© 2026 Auto Detailing. Alle Rechte vorbehalten.", FOLLOW: "FOLGEN"
                }
            }
        },
        fallbackLng: "es",
        interpolation: { escapeValue: false }
    });

export default i18n;