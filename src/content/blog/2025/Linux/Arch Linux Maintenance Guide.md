---
title: "Arch Linux Maintenance Guide: Updating System and Cleaning Unused Files"
description: Maintaining your Arch Linux system involves regular updates and cleaning to ensure optimal performance and security. This guide covers essential commands to update your system, clear package caches, remove orphaned packages, and delete unnecessary files.
pubDate: April 05 2025
heroImage: /images/blog-placeholder-1.png
---
Maintaining your Arch Linux system involves regular updates and cleaning to ensure optimal performance and security. This guide covers essential commands to update your system, clear package caches, remove orphaned packages, and delete unnecessary files.

## 1. Updating Your System

To keep your system up-to-date with the latest packages and security patches, use the following command:


```
sudo pacman -Syu
```


- `-S` syncs packages.
- `-y` refreshes the package database.
- `-u` upgrades all outdated packages.

**Note:** Regular updates are crucial for system stability and security.

## 2. Clearing the Package Cache

Pacman stores downloaded packages in `/var/cache/pacman/pkg/`. Over time, this can consume significant disk space. To manage this cache:

- **Remove uninstalled packages from the cache:**

```
sudo pacman -Sc
```

- **Remove all files from the cache:**

```
sudo pacman -Scc
```

- **Using `paccache` for more control:**

The `paccache` utility, part of the `pacman-contrib` package, allows you to retain a specific number of recent package versions:

- **Install `pacman-contrib` (if not already installed):**

```
sudo pacman -S pacman-contrib
```

- **Keep only the latest three versions of each package:**

```
sudo paccache -r
```

- **Keep only the latest version of each package:**

```
sudo paccache -rk1
```

- **Remove all cached versions of uninstalled packages:**

```
sudo paccache -ruk0
```

## 3. Removing Orphaned Packages

Orphaned packages are dependencies that were installed with other packages but are no longer required. To identify and remove them:

- **List orphaned packages:**

```
pacman -Qdtq
```
- **Remove orphaned packages and their configuration files:**

```
sudo pacman -Rns $(pacman -Qdtq)
```

## 4. Cleaning the Home Directory Cache

User-specific caches can accumulate in your home directory, particularly in `~/.cache/`. While clearing them can free up space, **caches are created for a reason**—they often store temporary files that improve application performance, such as thumbnails, browser data, or package indexes.

### **Proceed with caution**:
Removing everything in `~/.cache` can result in:
- Slower launch times (as apps rebuild caches)
- Lost preferences or login sessions (depending on the app)
- Potential errors for programs expecting cached files

### **To inspect and selectively clean large cache directories:**

- **List sizes of cached directories:**

```
du -sh ~/.cache/*
```

- **Manually remove known safe directories** (e.g. browser caches, thumbnail cache):

```
rm -r ~/.cache/mozilla
rm -r ~/.cache/thumbnails
```

- **If you're sure and want to clear everything:**

```
rm -r ~/.cache/*
```

Avoid using `-f` (force) unless you're confident. If certain files won't delete, it may be due to:
- Files in use
- Permission issues
- Files managed by system or services (e.g. GNOME Tracker, Electron apps)

**Recommendation**: Understand what you're deleting. Never blindly force-delete everything—especially with `sudo rm -rf ~/.cache/*`.
## 5. Removing Unused Flatpak Packages (If Applicable)

If you use Flatpak, unused runtimes and packages can consume disk space. To remove them:

- **Uninstall unused runtimes:**

```
flatpak uninstall --unused
```
## 6. Clearing Systemd Journal Logs

Systemd journal logs help with diagnosing issues, tracking crashes, and viewing service behavior. Over time, they can take up a significant amount of space—especially on systems with limited storage.

To manage journal size, you can vacuum old logs based on age or total disk usage.

### **Why 2 weeks?**

A two-week retention period is a **balanced default**:
- Keeps logs from recent updates and problems
- Avoids growing log files unnecessarily
- Reasonable timeframe for most debugging needs

However, you can adjust this based on your system usage. For example:
- Servers or systems with frequent changes may want longer retention.
- Lightweight desktops or VMs may reduce it further.

```
sudo journalctl --vacuum-time=2weeks
```

### **Why 100MB?**

Limiting the journal to 100MB ensures it won’t consume excessive space while still retaining a history.

```
sudo journalctl --vacuum-size=100M
```

**Recommendations**:
- For low-storage systems (e.g. laptops, VMs): Try `--vacuum-size=50M` or `--vacuum-time=1week`.
- For production servers: Consider a more generous size (e.g. 500MB or `--vacuum-time=1month`) for better audit trail.

You can also permanently set these defaults in `/etc/systemd/journald.conf`.

---

**Regular maintenance** of your Arch Linux system ensures it remains efficient and secure. By updating packages and cleaning unnecessary files periodically, you can prevent potential issues and optimize system performance.

For more detailed information, refer to the [Arch Linux Wiki on System Maintenance](https://wiki.archlinux.org/title/System_maintenance).