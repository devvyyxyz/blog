---
title: 'Clean up Arch Linux'
description: 'How to clean up a Arch Linux system'
pubDate: 'Feb 06 2025'
heroImage: '/blog-placeholder-1.jpg'
---


> Please ensure you understand the purpose of each script before running it, as some scripts may alter system settings or delete files. Always run with appropriate permissions, especially for scripts requiring sudo access.


## Clean pkg cache
List packages
```bash
ls /var/cache/pacman/pkg/ | less 
```
Remove all pkg except those installed
```
sudo pacman -Sc 
```
Remove all files
```
sudo pacman -Scc
```
Download manually from archive.

### Automatically remove
```
sudo pacman -S pacman-contrib
```
Remove
```
paccache -r
```
Systemd timer
create file in `/etc/systemd/system/paccache.timer` with the following contents
```
[Unit]
Description=Clean-up old pacman pkg cache

[Timer]
OnCalendar=monthly
Persistent=true

[Install]
WantedBy=multi-user.target
```
Enable by `sudo systemctl start paccache.timer`

Pacman post-transaction hook


## remove unused packages
List unused
```
sudo pacman -Qtdq
```

Remove unused
```
sudo pacman -R $(pacman -Qtdq)
```

## Clean home cache
cache is located in ~/.cache

## Config Files
stored in ~/.config/

## Find and remove
install rmlint package `sudo pacman -S rm lint`.
