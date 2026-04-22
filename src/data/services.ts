import React from 'react';
import type { Service, ProcessStep } from '../types';
import {
    FiGlobe,
    FiZap,
    FiTool,
    FiTarget,
    FiUsers,
    FiLifeBuoy
} from 'react-icons/fi';

export const services: Service[] = [
    {
        icon: React.createElement(FiGlobe),
        title: 'Presencia Digital',
        subtitle: 'Webs que venden',
        description:
            'Diseño y desarrollo de sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Landing pages, e-commerce y más.',
        features: ['Diseño responsivo', 'SEO optimizado', 'Carga ultra-rápida', 'Dominio propio'],
    },
    {
        icon: React.createElement(FiZap),
        title: 'Automatización',
        subtitle: 'Ahorrá horas de trabajo',
        description:
            'Automatizo procesos repetitivos de tu negocio. Desde reportes automáticos hasta integración con WhatsApp, email y sistemas externos.',
        features: ['Reportes automáticos', 'Integración WhatsApp', 'Notificaciones', 'Flujos de trabajo'],
    },
    {
        icon: React.createElement(FiTool),
        title: 'Sistemas a Medida',
        subtitle: 'Software para tu negocio',
        description:
            'Software personalizado para resolver las necesidades específicas de tu empresa. Stock, gestión, facturación y más.',
        features: ['Gestión de stock', 'Control de ventas', 'Panel administrativo', 'Reportes'],
    },
];

export const processSteps: ProcessStep[] = [
    {
        step: '01',
        title: 'Consulta Inicial',
        description: 'Hablamos sobre tu negocio, tus necesidades y definimos objetivos claros.',
    },
    {
        step: '02',
        title: 'Propuesta & Diseño',
        description: 'Te presento un plan detallado con tiempos, costos y diseño del proyecto.',
    },
    {
        step: '03',
        title: 'Desarrollo',
        description: 'Construyo tu solución con actualizaciones constantes para que veas el progreso.',
    },
    {
        step: '04',
        title: 'Entrega & Soporte',
        description: 'Entrega final con capacitación y soporte continuo para que todo funcione perfecto.',
    },
];

export const whyMe = [
    {
        icon: React.createElement(FiTarget),
        title: 'Enfocado en Resultados',
        text: 'Cada proyecto está diseñado para generar un impacto real y medible en tu negocio.',
    },
    {
        icon: React.createElement(FiUsers),
        title: 'Comunicación Clara',
        text: 'Te explico todo en lenguaje simple. Sin jerga técnica innecesaria, sin sorpresas.',
    },
    {
        icon: React.createElement(FiLifeBuoy),
        title: 'Soporte Continuo',
        text: 'No desaparezco después de entregar. Estoy disponible para ajustes y mejoras.',
    },
];
