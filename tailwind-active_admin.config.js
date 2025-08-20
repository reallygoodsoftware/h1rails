import { execSync } from 'child_process';
import activeAdminPlugin from '@activeadmin/activeadmin/plugin';

const activeAdminPath = execSync('bundle show activeadmin', { encoding: 'utf-8' }).trim();

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Active Admin gem files - using absolute path
    '/usr/bin/.rbenv/versions/3.2.2/lib/ruby/gems/3.2.0/gems/activeadmin-4.0.0.beta15/app/views/**/*.{arb,erb,html,rb}',
    '/usr/bin/.rbenv/versions/3.2.2/lib/ruby/gems/3.2.0/gems/activeadmin-4.0.0.beta15/lib/**/*.{arb,erb,html,rb}',
    `${activeAdminPath}/plugin.js`,
    `${activeAdminPath}/app/views/**/*.{arb,erb,html,rb}`,
    // Your application's Active Admin files
    './app/admin/**/*.{arb,erb,html,rb}',
    './app/views/active_admin/**/*.{arb,erb,html,rb}',
    './app/views/admin/**/*.{arb,erb,html,rb}',
    './app/views/layouts/active_admin*.{erb,html}',
    './app/javascript/**/*.js',

    // Include any custom Active Admin resource files
    './config/initializers/active_admin.rb'
  ],
  darkMode: ['class', '.dark'],
  plugins: [activeAdminPlugin]
}
