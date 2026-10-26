import { channels, cvHref, profile } from '../data/profile';

const HELP = [
  'help       Show this list',
  'about      Short introduction',
  'projects   Open the projects window',
  'skills     Open the skills window',
  'cv         Open the CV window',
  'contact    Show contact details',
  'clear      Clear the screen',
].join('\n');

export function runCommand(raw, openWindow) {
  const command = raw.trim().toLowerCase();

  if (!command) {
    return { clear: false, output: '' };
  }

  if (command === 'clear') {
    return { clear: true, output: '' };
  }

  if (command === 'help') {
    return { clear: false, output: HELP };
  }

  if (command === 'about') {
    openWindow('about');
    return {
      clear: false,
      output: `${profile.name}\n${profile.role}\n${profile.headline}\n\n${profile.summary}`,
    };
  }

  if (command === 'projects') {
    openWindow('projects');
    const lines = profile.projects.map((project) => {
      const links = [
        project.github ? `Repository: ${project.github}` : 'Repository: not added',
        project.demo ? `Live demo: ${project.demo}` : 'Live demo: not added',
      ];
      return `${project.name}\n${project.summary}\nStack: ${project.stack.join(', ')}\n${links.join('\n')}`;
    });
    return { clear: false, output: lines.join('\n\n') };
  }

  if (command === 'skills') {
    openWindow('skills');
    const lines = profile.skillGroups.map((group) => `${group.title}: ${group.items.join(', ')}`);
    return { clear: false, output: lines.join('\n') };
  }

  if (command === 'cv') {
    openWindow('cv');
    return {
      clear: false,
      output: cvHref
        ? `CV file: ${cvHref}`
        : 'A PDF CV is not included in this project. The CV window shows the summary, skills, and coursework that are on this site.',
    };
  }

  if (command === 'contact') {
    openWindow('contact');
    const listed = channels.filter((channel) => channel.href);
    if (listed.length === 0) {
      return {
        clear: false,
        output: 'Email, GitHub, and LinkedIn are not published on this site yet.',
      };
    }
    return {
      clear: false,
      output: listed.map((channel) => `${channel.label}: ${channel.href}`).join('\n'),
    };
  }

  return {
    clear: false,
    output: `No command named "${command}". Type help for the list.`,
  };
}
