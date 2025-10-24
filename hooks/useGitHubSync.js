import { useState, useEffect, useCallback } from 'react';

export const useGitHubSync = (username = 'Maxs22') => {
  const [repositories, setRepositories] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);

  const fetchGitHubData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Intentar obtener datos de GitHub con manejo de errores mejorado
      let profileData, reposData;

      try {
        // Fetch profile data con timeout
        const profileController = new AbortController();
        const profileTimeout = setTimeout(() => profileController.abort(), 10000);
        
        const profileResponse = await fetch(`https://api.github.com/users/${username}`, {
          signal: profileController.signal,
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-App'
          }
        });
        clearTimeout(profileTimeout);

        if (!profileResponse.ok) {
          if (profileResponse.status === 404) {
            throw new Error(`Usuario ${username} no encontrado en GitHub`);
          } else if (profileResponse.status === 403) {
            throw new Error('Límite de API de GitHub excedido. Intenta más tarde.');
          } else {
            throw new Error(`Error de GitHub API: ${profileResponse.status}`);
          }
        }
        profileData = await profileResponse.json();

        // Fetch repositories con timeout
        const reposController = new AbortController();
        const reposTimeout = setTimeout(() => reposController.abort(), 15000);
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
          signal: reposController.signal,
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-App'
          }
        });
        clearTimeout(reposTimeout);

        if (!reposResponse.ok) {
          if (reposResponse.status === 403) {
            throw new Error('Límite de API de GitHub excedido para repositorios');
          } else {
            throw new Error(`Error obteniendo repositorios: ${reposResponse.status}`);
          }
        }
        reposData = await reposResponse.json();

      } catch (apiError) {
        console.warn('GitHub API error:', apiError.message);
        
        // Si hay error de API, usar datos mock como fallback
        profileData = {
          login: username,
          name: 'Maximiliano Mendez',
          bio: 'Software Developer | Flutter | Dart | MVC | MVVM | Clean Architecture',
          public_repos: 33,
          followers: 6,
          following: 1,
          avatar_url: 'https://avatars.githubusercontent.com/u/placeholder?v=4',
          html_url: `https://github.com/${username}`,
          created_at: '2020-01-01T00:00:00Z',
          updated_at: new Date().toISOString()
        };

        reposData = [
          {
            id: 1,
            name: 'practica-git',
            description: 'Repositorio de práctica con Git',
            html_url: `https://github.com/${username}/practica-git`,
            homepage: null,
            language: 'HTML',
            stargazers_count: 39,
            forks_count: 0,
            created_at: '2021-01-01T00:00:00Z',
            updated_at: new Date().toISOString(),
            fork: false,
            archived: false,
            disabled: false,
            private: false,
            open_issues_count: 0,
            default_branch: 'main',
            license: null,
            has_pages: false,
            has_wiki: false,
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            clone_url: `https://github.com/${username}/practica-git.git`,
            ssh_url: `git@github.com:${username}/practica-git.git`,
            git_url: `git://github.com/${username}/practica-git.git`,
            svn_url: `https://github.com/${username}/practica-git`,
            languages_url: `https://api.github.com/repos/${username}/practica-git/languages`,
            topics_url: `https://api.github.com/repos/${username}/practica-git/topics`
          },
          {
            id: 2,
            name: 'Curso.Prep.Henry',
            description: 'Curso de Preparación para Ingresar a Henry',
            html_url: `https://github.com/${username}/Curso.Prep.Henry`,
            homepage: null,
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            created_at: '2021-02-01T00:00:00Z',
            updated_at: new Date().toISOString(),
            fork: true,
            archived: false,
            disabled: false,
            private: false,
            open_issues_count: 0,
            default_branch: 'main',
            license: null,
            has_pages: false,
            has_wiki: false,
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            clone_url: `https://github.com/${username}/Curso.Prep.Henry.git`,
            ssh_url: `git@github.com:${username}/Curso.Prep.Henry.git`,
            git_url: `git://github.com/${username}/Curso.Prep.Henry.git`,
            svn_url: `https://github.com/${username}/Curso.Prep.Henry`,
            languages_url: `https://api.github.com/repos/${username}/Curso.Prep.Henry/languages`,
            topics_url: `https://api.github.com/repos/${username}/Curso.Prep.Henry/topics`
          },
          {
            id: 3,
            name: 'MaximiliaN',
            description: 'Primera pagina web',
            html_url: `https://github.com/${username}/MaximiliaN`,
            homepage: null,
            language: 'CSS',
            stargazers_count: 0,
            forks_count: 0,
            created_at: '2021-03-01T00:00:00Z',
            updated_at: new Date().toISOString(),
            fork: false,
            archived: false,
            disabled: false,
            private: false,
            open_issues_count: 0,
            default_branch: 'main',
            license: null,
            has_pages: false,
            has_wiki: false,
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            clone_url: `https://github.com/${username}/MaximiliaN.git`,
            ssh_url: `git@github.com:${username}/MaximiliaN.git`,
            git_url: `git://github.com/${username}/MaximiliaN.git`,
            svn_url: `https://github.com/${username}/MaximiliaN`,
            languages_url: `https://api.github.com/repos/${username}/MaximiliaN/languages`,
            topics_url: `https://api.github.com/repos/${username}/MaximiliaN/topics`
          },
          {
            id: 4,
            name: 'joboffer',
            description: 'Proyecto de ofertas de trabajo',
            html_url: `https://github.com/${username}/joboffer`,
            homepage: null,
            language: 'JavaScript',
            stargazers_count: 1,
            forks_count: 0,
            created_at: '2021-04-01T00:00:00Z',
            updated_at: new Date().toISOString(),
            fork: false,
            archived: false,
            disabled: false,
            private: false,
            open_issues_count: 0,
            default_branch: 'main',
            license: null,
            has_pages: false,
            has_wiki: false,
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            clone_url: `https://github.com/${username}/joboffer.git`,
            ssh_url: `git@github.com:${username}/joboffer.git`,
            git_url: `git://github.com/${username}/joboffer.git`,
            svn_url: `https://github.com/${username}/joboffer`,
            languages_url: `https://api.github.com/repos/${username}/joboffer/languages`,
            topics_url: `https://api.github.com/repos/${username}/joboffer/topics`
          }
        ];

        // Mostrar warning pero continuar con datos mock
        setError(`⚠️ Usando datos de ejemplo: ${apiError.message}`);
      }

      // Process repositories to get additional data (solo si tenemos datos reales)
      const processedRepos = await Promise.all(
        reposData.map(async (repo) => {
          let languages = {};
          let topics = { names: [] };

          // Solo intentar obtener datos adicionales si no es mock data
          if (repo.languages_url && !repo.languages_url.includes('placeholder')) {
            try {
              const languagesResponse = await fetch(repo.languages_url, {
                headers: {
                  'Accept': 'application/vnd.github.v3+json',
                  'User-Agent': 'Portfolio-App'
                }
              });
              if (languagesResponse.ok) {
                languages = await languagesResponse.json();
              }
            } catch (error) {
              console.warn(`Error fetching languages for ${repo.name}:`, error);
            }

            try {
              const topicsResponse = await fetch(repo.topics_url, {
                headers: {
                  'Accept': 'application/vnd.github.mercy-preview+json',
                  'User-Agent': 'Portfolio-App'
                }
              });
              if (topicsResponse.ok) {
                topics = await topicsResponse.json();
              }
            } catch (error) {
              console.warn(`Error fetching topics for ${repo.name}:`, error);
            }
          }

          return {
            id: repo.id,
            name: repo.name,
            description: repo.description || 'Sin descripción',
            url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language || 'Other',
            languages: languages,
            topics: topics.names || [],
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            size: repo.size,
            is_fork: repo.fork,
            archived: repo.archived,
            disabled: repo.disabled,
            private: repo.private,
            open_issues: repo.open_issues_count,
            default_branch: repo.default_branch,
            license: repo.license?.name || null,
            has_pages: repo.has_pages,
            has_wiki: repo.has_wiki,
            has_issues: repo.has_issues,
            has_projects: repo.has_projects,
            has_downloads: repo.has_downloads,
            clone_url: repo.clone_url,
            ssh_url: repo.ssh_url,
            git_url: repo.git_url,
            svn_url: repo.svn_url
          };
        })
      );

      // Filter and categorize repositories
      const publicRepos = processedRepos.filter(repo => !repo.private && !repo.archived);
      const featuredRepos = publicRepos
        .filter(repo => repo.stars > 0 || repo.name.toLowerCase().includes('portfolio') || repo.name.toLowerCase().includes('maximilian'))
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 6);

      setRepositories(processedRepos);
      setProfile({
        ...profileData,
        public_repos: publicRepos.length,
        featured_repos: featuredRepos.length
      });
      setLastSync(new Date().toISOString());

      // Save to localStorage for caching
      localStorage.setItem('github_data', JSON.stringify({
        repositories: processedRepos,
        profile: profileData,
        lastSync: new Date().toISOString()
      }));

    } catch (err) {
      setError(err.message);
      console.error('Error fetching GitHub data:', err);
      
      // Try to load from cache if API fails
      const cachedData = localStorage.getItem('github_data');
      if (cachedData) {
        const { repositories: cachedRepos, profile: cachedProfile } = JSON.parse(cachedData);
        setRepositories(cachedRepos);
        setProfile(cachedProfile);
        setError(`⚠️ Usando datos en caché: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }, [username]);

  const syncNow = useCallback(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  const getFeaturedProjects = useCallback(() => {
    return repositories
      .filter(repo => !repo.private && !repo.archived)
      .filter(repo => 
        repo.stars > 0 || 
        repo.name.toLowerCase().includes('portfolio') || 
        repo.name.toLowerCase().includes('maximilian') ||
        repo.name.toLowerCase().includes('flutter') ||
        repo.name.toLowerCase().includes('app')
      )
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 6);
  }, [repositories]);

  const getTechStack = useCallback(() => {
    const techCount = {};
    repositories.forEach(repo => {
      if (repo.languages) {
        Object.keys(repo.languages).forEach(lang => {
          techCount[lang] = (techCount[lang] || 0) + repo.languages[lang];
        });
      }
    });

    return Object.entries(techCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 20)
      .map(([tech]) => tech);
  }, [repositories]);

  const getRecentActivity = useCallback(() => {
    return repositories
      .filter(repo => !repo.private)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 5);
  }, [repositories]);

  useEffect(() => {
    // Check if we have cached data
    const cachedData = localStorage.getItem('github_data');
    if (cachedData) {
      const { repositories: cachedRepos, profile: cachedProfile, lastSync: cachedSync } = JSON.parse(cachedData);
      const cacheAge = new Date() - new Date(cachedSync);
      
      // If cache is less than 1 hour old, use it
      if (cacheAge < 3600000) {
        setRepositories(cachedRepos);
        setProfile(cachedProfile);
        setLastSync(cachedSync);
        setLoading(false);
        
        // Still fetch fresh data in background
        fetchGitHubData();
        return;
      }
    }

    // Fetch fresh data
    fetchGitHubData();
  }, [fetchGitHubData]);

  // Auto-sync every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchGitHubData();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [fetchGitHubData]);

  return {
    repositories,
    profile,
    loading,
    error,
    lastSync,
    syncNow,
    getFeaturedProjects,
    getTechStack,
    getRecentActivity,
    isStale: lastSync ? (new Date() - new Date(lastSync)) > 3600000 : true
  };
};
