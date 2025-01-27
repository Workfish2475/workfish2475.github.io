import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',  // Changed from 'dist' to 'build'
            assets: 'build',  // Changed from 'dist' to 'build'
            fallback: 'index.html',
            strict: false
        })
    }
};