/* ===== Types for the portfolio ===== */

export interface PersonalInfo {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    linkedin: string;
    github: string;
}

import React from 'react';

export interface Skill {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    tags?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    detail: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
}

export interface Service {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
}
