module.exports = {
  apps: [
    {
      name: "nextapp",
      script: "npm",
      args: "start",
      cwd: "/var/www/nextapp/current",
      interpreter: "none", // run npm directly via system path
      instances: 1,        // or 0 for auto-clustering (if stateless)
      exec_mode: "fork",   // "cluster" not needed for npm shell scripts
      watch: false,
      ignore_watch: [
        "node_modules",
        ".git",
        ".github",
        "*.log",
        ".vscode",
        "logs"
      ],
      autorestart: true,
      max_memory_restart: "1G",

      // Logging
      out_file: "/var/log/pm2/nextapp.out.log",
      error_file: "/var/log/pm2/nextapp.err.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      log_type: "plain",

      // Environment
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
