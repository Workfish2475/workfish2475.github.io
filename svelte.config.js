import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'dist',  // Changed from 'build' to 'dist' to match package.json
            assets: 'dist',
            fallback: null,
            precompress: false,
            strict: true
        })
    }
};