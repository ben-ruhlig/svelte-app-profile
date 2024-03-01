import { sveltekit } from "@sveltejs/kit/vite";
import { error } from '@sveltejs/kit';

export function load({ params }) {
    if (params.slug === params.slug) {
        return {
            title: params.slug,
            content: 'the call to load worked.'
        };
    }
    
    throw error(404, 'Not found');
}