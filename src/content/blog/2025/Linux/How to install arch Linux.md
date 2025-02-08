---
title: How to install arch Linux
description: A simple step by step guide to installing Arch Linux
pubDate: Feb 08 2025
heroImage: /images/blog-placeholder-1.png
---
## 1. Install Arch Linux

Follow the [Arch Linux Installation Guide](https://wiki.archlinux.org/title/installation_guide) for detailed instructions. Below is a summary of the key steps:

### 1.1. Boot into the Arch ISO
- Download the Arch Linux ISO and create a bootable USB.
- Boot into the USB drive and select "Arch Linux Install" from the menu.

### 1.2. Set Up the System
- Connect to the internet:  
  `iwctl`
  `Device list` 
  `Device wlan0 show`
  `Station wlan0 get-networks`
  `Station wlan0 connect <network>`
  `<Password>`
  `exit`
- Update the system clock:  
  `timedatectl set-ntp true`
- Partition the disk:  
  `fdisk /dev/sdX`
- Format and mount partitions:  
  `mkfs.ext4 /dev/sdX1`  
  `mount /dev/sdX1 /mnt`
- Install essential packages:  
  `pacstrap /mnt base linux linux-firmware`
- Generate an fstab file:  
  `genfstab -U /mnt >> /mnt/etc/fstab`
- Chroot into the system:  
  `arch-chroot /mnt`
- Set up timezone, locale, and hostname:  
  `ln -sf /usr/share/zoneinfo/Region/City /etc/localtime`  
  `hwclock --systohc`  
  `echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen`  
  `locale-gen`  
  `echo "myhostname" > /etc/hostname`
- Set root password and install bootloader:  
  `passwd`  
  `pacman -S grub`  
  `grub-install /dev/sdX`  
  `grub-mkconfig -o /boot/grub/grub.cfg`
- Exit and reboot:  
  `exit`  
  `reboot`

---

## 2. Install Applications

### 2.1. Enable Parallel Downloads
Enable parallel downloads for faster package installation:  
`sudo nano /etc/pacman.conf`  
Uncomment `ParallelDownloads` in the `[options]` section.

### 2.2. Install KDE Plasma and Display Manager
Install KDE Plasma, SDDM, and essential packages:  
`sudo pacman -S xorg plasma sddm kde-applications`  
Enable the display manager:  
`sudo systemctl enable sddm.service`  
`sudo systemctl start sddm.service`

### 2.3. Install AUR Helper (e.g., `paru`)
Install `git` and clone `paru`:  
`sudo pacman -S git base-devel`  
`git clone https://aur.archlinux.org/paru.git`  
`cd paru`  
`makepkg -si`

### 2.4. Install Additional Apps
Install commonly used apps:  
`sudo pacman -S firefox vlc libreoffice gimp neofetch`  
`paru -S google-chrome spotify visual-studio-code-bin`

Apps:
1. [Firefox](https://www.mozilla.org/firefox)
2. [VLC Media Player](https://www.videolan.org/vlc/)
3. [LibreOffice](https://www.libreoffice.org/)
4. [GIMP (GNU Image Manipulation Program)](https://www.gimp.org/)
5. [Neofetch](https://github.com/dylanaraps/neofetch)
6. [Paru (AUR Helper)](https://github.com/Morganamilo/paru)
7. [Google Chrome](https://www.google.com/chrome/)
8. [Spotify](https://www.spotify.com/)
9. [Visual Studio Code](https://code.visualstudio.com/)

---

## 3. Install Browser Extensions
Install browser extensions to enhance your experience:  
10. [**Proton Pass**](https://proton.me/pass) - Encrypted password manager.  
11. [**uBlock Origin**](https://ublockorigin.com/) - Ad blocker.  
12. [**Proton VPN**](https://protonvpn.com/) - Secure VPN for privacy.  
13. [**SponsorBlock**](https://sponsor.ajay.app/) - Skips sponsorships and other annoying segments in YouTube videos.  
14. [**YouTube Shorts Block**](https://chrome.google.com/webstore/detail/youtube-shorts-block/miaokblkfoephgphabhaanghpmjjkhfn) - Blocks YouTube Shorts from appearing.  
15. [**Dark Reader**](https://darkreader.org/) - Dark mode for websites.  
16. [**Improve YouTube**](https://github.com/ImprovedTube/YouTube-Extension) - Enhances YouTube with additional customization options.  
17. [**Grammarly**](https://www.grammarly.com/) - Grammar and spell checker.  
18. [**Honey**](https://www.joinhoney.com/) - Automatically finds and applies coupon codes while shopping online.  
19. [**LastPass**](https://www.lastpass.com/) - Secure password manager.  
20. [**Tab Session Manager**](https://tab-session-manager.chromeplugin.net/) - Saves and restores tab sessions.  
21. [**The Great Suspender**](https://chrome.google.com/webstore/detail/the-great-suspender/original) - Suspends inactive tabs to free up system resources.  
22. [**Checker Plus for Gmail**](https://jasonsavard.com/checkerPlusForGmail) - Email notifications and management directly in your browser.  
23. [**Nimbus Screenshot & Screen Video Recorder**](https://nimbusweb.me/screenshot.php) - Capture screenshots and record screen videos.  
24. [**DuckDuckGo Privacy Essentials**](https://duckduckgo.com/app) - Improves privacy with tracker blocking and private search.  
25. [**WebTranslate**](https://translate.google.com/) - Quick webpage translations directly in the browser.  
26. [**Wappalyzer**](https://www.wappalyzer.com/) - Detect technologies used on websites.  
27. [**Bitwarden**](https://bitwarden.com/) - Free and open-source password manager.  
28. [**HTTPS Everywhere**](https://www.eff.org/https-everywhere) - Forces websites to use secure HTTPS connections.  
29. [**Privacy Badger**](https://privacybadger.org/) - Stops trackers that monitor your browsing activity.  
30. [**Zoom Scheduler**](https://chrome.google.com/webstore/detail/zoom-scheduler) - Quickly schedule Zoom meetings.  
31. [**Trello**](https://trello.com/) - Manage tasks and projects in your browser.  
32. [**Pocket**](https://getpocket.com/) - Save articles and webpages to read later.  
33. [**Session Buddy**](https://sessionbuddy.com/) - Manage and organize browser tabs.  

---

## 4. Configure System Settings

### 4.1. Set Up Time and Date
Ensure the time is correct:  
`sudo timedatectl set-ntp true`

### 4.2. Customize KDE Plasma
- Go to **System Settings** > **Appearance** and choose your theme, icons, and fonts.
- Install additional themes via `plasma-settings` or [store.kde.org](https://store.kde.org).

### 4.3. Enable Firewall
Install and enable `ufw`:  
`sudo pacman -S ufw`  
`sudo systemctl enable ufw.service`  
`sudo systemctl start ufw.service`

---

## 5. Install Drivers and Firmware

### 5.1. GPU Drivers
Install GPU drivers based on your hardware:  
- Intel:  
  `sudo pacman -S xf86-video-intel`  
- AMD:  
  `sudo pacman -S xf86-video-amdgpu`  
- NVIDIA:  
  `sudo pacman -S nvidia nvidia-utils`

### 5.2. Additional Firmware
Install the latest firmware:  
`sudo pacman -S linux-firmware`

---

## 6. Set Up Development Environment

### 6.1. Install Programming Languages
Install popular programming tools:  
`sudo pacman -S python nodejs npm openjdk git`

### 6.2. Configure Git
Set up your Git configuration:  
`git config --global user.name "Your Name"`  
`git config --global user.email "you@example.com"`

### 6.3. Install Code Editor
Install Visual Studio Code:  
`paru -S visual-studio-code-bin`

---

## 7. Configure Backups

### 7.1. Install Backup Tools
Install and configure `rsync` or `borg`:  
`sudo pacman -S rsync`

### 7.2. Set Up Cloud Sync
Install a cloud synchronization tool like Syncthing:  
`sudo pacman -S syncthing`

---

## 8. Test and Finalize

### 8.1. Update the System
Run a full system update:  
`sudo pacman -Syu`

### 8.2. Verify Setup
Test:  
- Audio  
- Display  
- Network  

### 8.3. Install Neofetch for Fun
Display system info on login:  
`sudo pacman -S neofetch`  
`neofetch`

---

Congratulations! Your Arch Linux system with KDE Plasma is ready to use!