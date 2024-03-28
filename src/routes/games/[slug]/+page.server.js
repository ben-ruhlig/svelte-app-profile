import { sveltekit } from "@sveltejs/kit/vite";
import { error } from '@sveltejs/kit';
import fetch from 'node-fetch';

export async function load({ params }) {
    if (params.slug === params.slug) {
        if (params.slug === 'trivia') {
            return {
                title: params.slug,
                content: 'This is a trivia game using https://opentdb.com/',
            };
        }
        else {
            const apiUrl = `https://jsonplaceholder.typicode.com/posts/${params.slug.slice(-1)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
    
            return {
                title: params.slug,
                content: apiUrl,
                apiResponse: JSON.stringify(data),
            };
        }

    }
    throw error(404, 'Not found');
}