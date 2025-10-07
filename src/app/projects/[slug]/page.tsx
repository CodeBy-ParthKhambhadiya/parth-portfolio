'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../page'; // Make sure this exports the projects array
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GiCelebrationFire } from 'react-icons/gi';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { sliderSettings } from '@/components/Project/images';

interface ProjectProps {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: ProjectProps) {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    const [currentSlide, setCurrentSlide] = useState(0);

    if (!project) {
        return notFound();
    }

    const totalImages = project.images?.length || 0;

    return (
        <main className="flex flex-col items-center px-6 sm:px-10 py-16 bg-gray-50 min-h-screen">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8 sm:p-10">

                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                    <FiArrowLeft className="w-5 h-5" />
                    Back
                </Link>

                {/* Slider */}
                <div className="relative">
                    <Slider
                        {...sliderSettings}
                        afterChange={(current: number) => setCurrentSlide(current)}
                        slidesToShow={1}
                        slidesToScroll={1}
                        dots={false}
                    >
                        {project.images && project.images.length > 0 ? (
                            project.images.map((img, idx) => (
                                <div key={idx} className="flex items-center justify-center">
                                    <Image
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        width={815}
                                        height={500}
                                        className="object-cover rounded-xl w-full h-[500px]"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center w-full h-[500px] border-2 border-gray-400 rounded-lg">
                                <p className="text-gray-500 text-sm text-center">
                                    No Image
                                </p>
                            </div>
                        )}
                    </Slider>

                    {/* Image Counter */}
                    {totalImages > 0 && (
                        <div className="absolute bottom-3 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                            {currentSlide + 1} / {totalImages}
                        </div>
                    )}
                </div>

                {/* GitHub & Live Links */}
                <div className="flex flex-wrap gap-3 mb-3 mt-3">
                    {/* Single GitHub */}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-0 px-3 py-1 bg-gray-800 text-white rounded-lg group hover:bg-gray-900 transition-colors duration-200"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:ml-1 whitespace-nowrap">
                                GitHub Repo
                            </span>
                        </a>
                    )}

                    {/* Multiple GitHub links */}
                    {project.githubLinks?.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-0 px-3 py-1 bg-gray-800 text-white rounded-lg group hover:bg-gray-900 transition-colors duration-200"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:ml-1 whitespace-nowrap">
                                {link.label}
                            </span>
                        </a>
                    ))}

                    {/* Live Demo */}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0 px-3 py-1 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white group hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200"
                        >
                            <FaExternalLinkAlt className="w-5 h-5" />
                            <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:ml-1 whitespace-nowrap">
                                Live Demo
                            </span>
                        </a>
                    )}
                </div>

                {/* Project Title */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{project.title}</h1>
                    {project.important && (
                        <GiCelebrationFire className="text-red-600 w-6 h-6" title="Important Project" />
                    )}
                </div>

                {/* Project Description */}
                <p className="text-gray-700 text-lg mb-6">{project.description}</p>

                {/* Project Details */}
                <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {project.details}
                </div>
            </div>
        </main>
    );
}
