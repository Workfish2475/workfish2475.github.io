import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { projects } from "../../projectItem.js";

export const load: PageLoad = ({ params }) => {
    const projectToReturn = projects.find(project => project.id === Number(params.projectInfo));
    if (projectToReturn) {
        return projectToReturn;
    }
    throw error(404, 'Not found');
};