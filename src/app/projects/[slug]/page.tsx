'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../page';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GiCelebrationFire } from 'react-icons/gi';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { Arrow, sliderSettings } from '@/components/Project/images';

interface ProjectPageProps {
    params: Promise<{ slug: string }>; // params is now a Promise
}
export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = use(params); // <-- This is the new way
    const project = projects.find((p) => p.slug === slug);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [zoomImage, setZoomImage] = useState<string | null>(null);

    if (!project) return notFound();

    const totalImages = project.images?.length || 0;
    const images = project.images || []; // fallback to empty array
    return (
        <main className="flex flex-col items-center px-4 sm:px-6 lg:px-10 py-10 sm:py-16 bg-gray-50 min-h-screen">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-5 sm:p-8 md:p-10">

                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 mb-6 px-3 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                >
                    <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Back
                </Link>

                {/* Image Slider */}
                <div className="relative mb-6">
                    <Slider
                        {...sliderSettings}
                        afterChange={(current: number) => setCurrentSlide(current)}
                        slidesToShow={1}
                        slidesToScroll={1}
                        dots={false}
                    >
                        {images.length > 0 ? (
                            images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center cursor-zoom-in"
                                    onClick={() => setZoomImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        width={800}
                                        height={500}
                                        className="object-cover rounded-xl w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center w-full h-[200px] sm:h-[350px] md:h-[450px] border-2 border-gray-400 rounded-lg">
                                <p className="text-gray-500 text-sm text-center">No Image</p>
                            </div>
                        )}
                    </Slider>

                    {/* Image Counter */}
                    {totalImages > 0 && (
                        <div className="absolute bottom-3 right-4 bg-black/50 text-white text-xs sm:text-sm px-2 py-1 rounded">
                            {currentSlide + 1} / {totalImages}
                        </div>
                    )}
                </div>

                {zoomImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setZoomImage(null)} // click on background closes zoom
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-5 right-5 text-white text-2xl p-2 bg-black/50 rounded-full hover:bg-white hover:text-black transition"
                            onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}
                        >
                            <FiX />
                        </button>

                        <div
                            className="w-full max-w-[80vw] max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Slider
                                {...sliderSettings}
                                initialSlide={currentSlide}
                                arrows={true}
                                nextArrow={<Arrow direction="next" top="40%" />}
                                prevArrow={<Arrow direction="prev" top="40%" />}
                            >
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-center"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} zoomed ${idx + 1}`}
                                            width={1800}
                                            height={1200}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}



                {/* GitHub & Live Links */}
                <div className="flex flex-wrap gap-3 mb-3 mt-3">
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
                <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {project.title}
                    </h1>
                    {project.important && (
                        <div className=" top-2 right-2 bg-red-600 rounded-full p-1 shadow-lg animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                            </svg>
                        </div>
                    )}
                </div>


                {/* Description */}
                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                    {project.description}
                </p>

                {/* Details */}
                <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {project.details}
                </div>
            </div>
        </main>
    );
}
