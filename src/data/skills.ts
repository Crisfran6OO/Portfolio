import React from 'react';
import type { Skill } from '../types';
import {
    FiLayout,
    FiServer,
    FiDatabase,
    FiCpu,
    FiGitBranch,
    FiLayers
} from 'react-icons/fi';

export const skills: Skill[] = [
    {
        icon: React.createElement(FiLayout),
        title: 'Frontend',
        description: 'Interfaces modernas, responsivas y con atención al detalle visual.',
        tags: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
        icon: React.createElement(FiServer),
        title: 'Backend',
        description: 'APIs robustas y aplicaciones server-side con arquitecturas bien diseñadas.',
        tags: ['PHP', 'Python', 'Node.js', 'Express', 'VB.NET'],
    },
    {
        icon: React.createElement(FiDatabase),
        title: 'Bases de Datos',
        description: 'Diseño y gestión de bases de datos relacionales para aplicaciones escalables.',
        tags: ['MySQL', 'SQL Server', 'Mongo DB'],
    },
    {
        icon: React.createElement(FiCpu),
        title: 'Automatización',
        description: 'Optimización de procesos y flujos de trabajo mediante tecnología.',
        tags: ['Scripting', 'Bots', 'APIs', 'Integrations'],
    },
    {
        icon: React.createElement(FiGitBranch),
        title: 'Control de Versiones',
        description: 'Trabajo colaborativo y gestión de código con las mejores prácticas.',
        tags: ['Git', 'GitHub', 'Notion', 'Trello'],
    },
    {
        icon: React.createElement(FiLayers),
        title: 'Arquitectura',
        description: 'Patrones de diseño y arquitecturas limpias para proyectos mantenibles.',
        tags: ['MVC', 'REST APIs', 'Clean Code', 'OOP'],
    },
];
