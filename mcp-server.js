#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';

class PortfolioMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'portfolio-sync',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'sync_github_data',
            description: 'Sincroniza datos del perfil de GitHub',
            inputSchema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string',
                  description: 'Nombre de usuario de GitHub',
                },
              },
              required: ['username'],
            },
          },
          {
            name: 'update_portfolio_projects',
            description: 'Actualiza los proyectos del portfolio',
            inputSchema: {
              type: 'object',
              properties: {
                projects: {
                  type: 'array',
                  description: 'Lista de proyectos actualizados',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      description: { type: 'string' },
                      technologies: { type: 'array', items: { type: 'string' } },
                      github_url: { type: 'string' },
                      live_url: { type: 'string' },
                    },
                  },
                },
              },
              required: ['projects'],
            },
          },
          {
            name: 'sync_skills',
            description: 'Sincroniza las habilidades técnicas',
            inputSchema: {
              type: 'object',
              properties: {
                skills: {
                  type: 'array',
                  description: 'Lista de habilidades técnicas',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      level: { type: 'string' },
                      category: { type: 'string' },
                    },
                  },
                },
              },
              required: ['skills'],
            },
          },
          {
            name: 'get_portfolio_data',
            description: 'Obtiene todos los datos del portfolio',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'sync_github_data':
            return await this.syncGitHubData(args.username);
          
          case 'update_portfolio_projects':
            return await this.updatePortfolioProjects(args.projects);
          
          case 'sync_skills':
            return await this.syncSkills(args.skills);
          
          case 'get_portfolio_data':
            return await this.getPortfolioData();
          
          default:
            throw new Error(`Herramienta desconocida: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    });
  }

  async syncGitHubData(username) {
    try {
      // Simular llamada a GitHub API
      const githubData = {
        username: username,
        repositories: [
          {
            name: 'practica-git',
            description: 'Repositorio de práctica con Git',
            stars: 39,
            language: 'HTML',
            url: `https://github.com/${username}/practica-git`,
          },
          {
            name: 'Curso.Prep.Henry',
            description: 'Curso de Preparación para Ingresar a Henry',
            stars: 0,
            language: 'JavaScript',
            url: `https://github.com/${username}/Curso.Prep.Henry`,
          },
          {
            name: 'MaximiliaN',
            description: 'Primera pagina web',
            stars: 0,
            language: 'CSS',
            url: `https://github.com/${username}/MaximiliaN`,
          },
          {
            name: 'joboffer',
            description: 'Proyecto de ofertas de trabajo',
            stars: 1,
            language: 'JavaScript',
            url: `https://github.com/${username}/joboffer`,
          },
        ],
        stats: {
          total_repos: 33,
          total_stars: 40,
          followers: 6,
          following: 1,
        },
        last_updated: new Date().toISOString(),
      };

      // Guardar datos en archivo
      await this.savePortfolioData('github', githubData);

      return {
        content: [
          {
            type: 'text',
            text: `✅ Datos de GitHub sincronizados exitosamente para @${username}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error sincronizando GitHub: ${error.message}`);
    }
  }

  async updatePortfolioProjects(projects) {
    try {
      const projectData = {
        projects: projects,
        last_updated: new Date().toISOString(),
      };

      await this.savePortfolioData('projects', projectData);

      return {
        content: [
          {
            type: 'text',
            text: `✅ ${projects.length} proyectos actualizados en el portfolio`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error actualizando proyectos: ${error.message}`);
    }
  }

  async syncSkills(skills) {
    try {
      const skillsData = {
        skills: skills,
        last_updated: new Date().toISOString(),
      };

      await this.savePortfolioData('skills', skillsData);

      return {
        content: [
          {
            type: 'text',
            text: `✅ ${skills.length} habilidades sincronizadas`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error sincronizando habilidades: ${error.message}`);
    }
  }

  async getPortfolioData() {
    try {
      const dataPath = './data/portfolio.json';
      
      try {
        const data = await fs.readFile(dataPath, 'utf8');
        const portfolioData = JSON.parse(data);
        
        return {
          content: [
            {
              type: 'text',
              text: `📊 Datos del portfolio obtenidos exitosamente:\n\n${JSON.stringify(portfolioData, null, 2)}`,
            },
          ],
        };
      } catch (error) {
        // Si no existe el archivo, crear estructura básica
        const defaultData = {
          github: null,
          projects: [],
          skills: [],
          last_sync: new Date().toISOString(),
        };
        
        await this.savePortfolioData('all', defaultData);
        
        return {
          content: [
            {
              type: 'text',
              text: `📊 Estructura de datos del portfolio creada:\n\n${JSON.stringify(defaultData, null, 2)}`,
            },
          ],
        };
      }
    } catch (error) {
      throw new Error(`Error obteniendo datos del portfolio: ${error.message}`);
    }
  }

  async savePortfolioData(section, data) {
    try {
      const dataDir = './data';
      const dataPath = './data/portfolio.json';
      
      // Crear directorio si no existe
      try {
        await fs.mkdir(dataDir, { recursive: true });
      } catch (error) {
        // El directorio ya existe
      }

      let portfolioData = {};
      
      // Leer datos existentes si el archivo existe
      try {
        const existingData = await fs.readFile(dataPath, 'utf8');
        portfolioData = JSON.parse(existingData);
      } catch (error) {
        // Archivo no existe, usar estructura vacía
      }

      // Actualizar sección específica
      if (section === 'all') {
        portfolioData = data;
      } else {
        portfolioData[section] = data;
        portfolioData.last_sync = new Date().toISOString();
      }

      // Guardar datos actualizados
      await fs.writeFile(dataPath, JSON.stringify(portfolioData, null, 2));
      
    } catch (error) {
      throw new Error(`Error guardando datos: ${error.message}`);
    }
  }

  setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Portfolio MCP Server running on stdio');
  }
}

const server = new PortfolioMCPServer();
server.run().catch(console.error);
