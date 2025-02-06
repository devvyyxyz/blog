---
title: Clean up Debian Linux
description: How to clean up a Debian Linux system
pubDate: Feb 06 2025
heroImage: /blog-placeholder-3.jpg
---
> Please ensure you understand the purpose of each script before running it, as some scripts may alter system settings or delete files. Always run with appropriate permissions, especially for scripts requiring sudo access.
## Clean Package Cache
Debian stores downloaded packages in `/var/cache/apt/archives`. Over time, this cache can consume significant disk space.

### List Cached Packages
```bash
ls /var/cache/apt/archives/ | less
```

### Remove Unused Packages from Cache
To remove old, unused packages:
```bash
sudo apt-get clean
```
This will remove all `.deb` files in the package cache.

If you'd like to keep only the most recent versions of packages and remove older versions:
```bash
sudo apt-get autoclean
```

### Automatically Remove Unused Packages
Debian allows you to automatically remove packages that were installed as dependencies but are no longer needed. First, install `deborphan` to find orphaned packages:
```bash
sudo apt-get install deborphan
```

List orphaned packages:
```bash
deborphan
```

Remove orphaned packages:
```bash
sudo apt-get remove --purge $(deborphan)
```

You can also use `apt-get autoremove` to remove unneeded packages:
```bash
sudo apt-get autoremove --purge
```

To automatically remove packages that were installed as dependencies but are no longer required, you can configure `apt` to automatically run autoremove at intervals using `systemd` timers.

### Systemd Timer for Auto Cleanup
Create a systemd timer to clean up unused packages monthly. Create the following file at `/etc/systemd/system/apt-autoremove.timer`:
```
[Unit]
Description=Automatically remove unused packages

[Timer]
OnCalendar=monthly
Persistent=true

[Install]
WantedBy=multi-user.target
```

Then enable and start the timer:
```bash
sudo systemctl enable apt-autoremove.timer
sudo systemctl start apt-autoremove.timer
```

## Remove Unused Dependencies
Sometimes, even after running `apt-get autoremove`, there may be additional unused dependencies. You can run the following to remove them:

```bash
sudo apt-get autoremove --purge
```

You can also use `deborphan` to find packages that are no longer required.

## Clean User Cache
Debian-based systems store user-specific cache in `~/.cache`. This cache includes browser history, temporary files, and other cached data.

### List Cache
```bash
ls ~/.cache
```

### Remove Cache
You can delete cache files manually or use the following command to remove all cache:
```bash
rm -rf ~/.cache/*
```

Be cautious, as some applications may require cache files to function properly.

## Clean Configuration Files
Many programs leave behind configuration files in the `~/.config/` directory, even after they have been uninstalled.

### List Configuration Files
```bash
ls ~/.config/
```

### Remove Old Configuration Files
If you've uninstalled software but their config files remain, you can manually delete them:
```bash
rm -rf ~/.config/<application-name>
```

## Find and Remove Duplicate Files
You can install `fdupes`, a command-line tool that identifies duplicate files:

### Install fdupes
```bash
sudo apt-get install fdupes
```

### Find Duplicate Files
```bash
fdupes -r /path/to/directory
```

### Remove Duplicate Files
```bash
fdupes -dN /path/to/directory
```
This will interactively delete duplicate files (be sure to review before deleting).

## Remove Old Kernels
If you have multiple kernels installed, you may want to remove older, unused ones.

### List Installed Kernels
```bash
dpkg --list | grep linux-image
```

### Remove Old Kernels
You can remove old kernels using `apt-get`. For example:
```bash
sudo apt-get remove --purge linux-image-<version>
```
Make sure not to remove the kernel you're currently running. Check your active kernel with:
```bash
uname -r
```

## Remove Unnecessary Logs
Debian stores logs in `/var/log/`. Over time, these logs can become large.

### Clean Old Log Files
You can manually remove old logs in `/var/log`:
```bash
sudo rm -f /var/log/*.gz /var/log/*.1 /var/log/*.old
```

Alternatively, use `logrotate` to manage logs and automatically remove old logs based on your system's configuration.