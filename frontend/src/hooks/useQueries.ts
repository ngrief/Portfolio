import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

export function useBackendData() {
  const { actor, isFetching: isActorFetching } = useActor();

  const socialLinksQuery = useQuery<Array<[string, string]>>({
    queryKey: ['socialLinks'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSocialLinks();
    },
    enabled: !!actor && !isActorFetching
  });

  const projectsQuery = useQuery<Array<[string, string]>>({
    queryKey: ['projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProjects();
    },
    enabled: !!actor && !isActorFetching
  });

  const parseProject = (id: string, jsonString: string): Project => {
    try {
      // Replace single quotes with double quotes for valid JSON
      const validJson = jsonString.replace(/'/g, '"');
      const parsed = JSON.parse(validJson);
      return {
        id,
        ...parsed
      };
    } catch (error) {
      console.error('Error parsing project:', error);
      return {
        id,
        title: 'Project',
        description: 'Description not available',
        technologies: [],
        github: '',
        demo: '',
        image: ''
      };
    }
  };

  const projects = projectsQuery.data?.map(([id, jsonString]) => parseProject(id, jsonString)) || [];

  return {
    socialLinks: socialLinksQuery.data || [],
    isLoadingSocialLinks: socialLinksQuery.isLoading,
    projects,
    isLoadingProjects: projectsQuery.isLoading
  };
}
