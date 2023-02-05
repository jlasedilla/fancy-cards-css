import React, { useRef } from 'react';
import './photo-scroll.css';

export const PhotoScroll = () => {
    const mouseDownAt = useRef<number>(0);
    const mouseAtPercentage = useRef<number>(0);
    const mouseMovePercentage = useRef<number>(0);
    const track = useRef<HTMLElement | null>(null);
    const images = useRef<HTMLCollectionOf<Element> | []>([]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        mouseDownAt.current = e.clientX;
        track.current = document.getElementById('image-track');
        images.current = track.current?.getElementsByClassName('image') ?? [];
        console.log(window.innerWidth);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!mouseDownAt.current) return;
        const mouseDelta = mouseDownAt.current - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const movePercentage = mouseAtPercentage.current + percentage;
        const currentPercentage = Math.min(movePercentage, 0) ? Math.max(movePercentage, -100) : 0;
        track.current?.animate(
            { transform: `translate(${currentPercentage}%)` },
            { duration: 1200, fill: 'forwards' }
        );
        for (const image of images.current ?? []) {
            image.animate(
                { objectPosition: `${currentPercentage + 100}% center` },
                { duration: 1200, fill: 'forwards' }
            );
        }
        mouseMovePercentage.current = currentPercentage;
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const nextPercentage = mouseMovePercentage.current;
        mouseDownAt.current = 0;
        mouseAtPercentage.current = nextPercentage;
    };

    return (
        <div className="photo-scroll">
            <div
                className="image-track"
                id="image-track"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseUp}
            >
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1674592309639-39067f6a8111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1675068766426-eb0f1a065314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1675208986290-a72414630bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1674410591597-ba15aa2b9d65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1675191475848-5dc8ec4bfafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1675104180341-4b075869b3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1674904742505-58abb123ad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
                <img
                    className="image"
                    title="image"
                    src="https://images.unsplash.com/photo-1674653844677-b98dfbbc0ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    draggable={false}
                />
            </div>
        </div>
    );
};
