import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
    hero: {
        title: 'Mobile App',
        highlight: 'Development',
        desc: 'In a mobile-first world, having a powerful and intuitive mobile application is essential. Metavara delivers cutting-edge iOS and Android solutions that engage users and drive measurable business outcomes.',
        heroImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1800&q=90&fit=crop',
    },
    cards: [
        {
            accent: '#1565c0',
            icon: '🍎',
            tag: 'iOS Native',
            title: 'iOS Application Development',
            desc: 'We craft beautiful, high-performance native iOS applications using Swift and SwiftUI. From App Store submission to ongoing updates, we handle every aspect of your iOS journey.',
            img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop',
        },
        {
            accent: '#3ddc84',
            icon: '🤖',
            tag: 'Android Native',
            title: 'Android Application Development',
            desc: 'Our Android experts build robust, material-design applications using Kotlin and Jetpack Compose, optimized across a wide range of devices from flagship to budget segments.',
            img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fit=crop',
        },
        {
            accent: '#7b1fa2',
            icon: '⚡',
            tag: 'Cross-Platform',
            title: 'React Native & Flutter',
            desc: 'When speed-to-market matters, we use React Native or Flutter to deliver beautiful, near-native experiences across both iOS and Android from a single shared codebase.',
            img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop',
        },
        {
            accent: '#e65100',
            icon: '🎨',
            tag: 'UI/UX Design',
            title: 'User-Centric Mobile Design',
            desc: 'Our mobile apps are designed with the user in mind. We prioritize intuitive UI/UX with rigorous usability testing to ensure high engagement, retention, and conversion rates.',
            img: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80&fit=crop',
        },
    ],
    why: {
        title: 'Apps That Perform. Experiences That Last.',
        body: 'We go beyond building apps. We build engagement engines. Our mobile solutions are designed for long-term retention, seamless updates, and the kind of user experience that earns 5-star reviews.',
    },
};

const MobileAppDevelopment = () => <ServicePage config={config} />;
export default MobileAppDevelopment;
