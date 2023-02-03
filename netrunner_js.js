// JAVASCRIPT PROJECT OUTLINE
// Order of operations

// rewatch mondays lecture on to get a better understanding === DONE

// get directory tree in place === DONE
// WITH LINKING === DONE

// get simple input parsing set up === DONE

// get basic input and ordered output working--------- tick
//          need to set up input checking with complex regex satements, for each potential input

// make new css file for when ssh'd into reso-agwe
// make sure can switch themes while page and game properly loaded before hand


//////////////////////////////////////// CHARACTERS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 

class Character {
    constructor(alias, pronoun, greeting, advice, resoAgweAdvice, status, connectionStatus) {
        this._alias = alias;                        // [0]
        this._pronoun = pronoun;                    // [1]
        this._greeting = greeting;                  // [2]
        this._advice = advice                       // [3]
        this._resoAgweAdvice = resoAgweAdvice                   // [4]
        this._status = status;                      // [5]
        this._connectionStatus = connectionStatus   // [6]
        this.charDirLink = {}

    }

    set alias(value) {
        if (value.length < 3) {
            alert("alias is too short");
        }
        this._alias = value;
    }

    set pronoun(value) {
        if (value != he/him || she/her || they/them) {
        alert("that is an invalid pronoun");
        }
        this._pronoun = value;
    }

    set greeting(value) {
        this._greeting = value;
    }

    set advice(value) {
        this._advice = value;
    }

    set resoAgweAdvice(value) {
        this._resoAgweAdvice = value;
    }

    set status(value) {
        this._status = value;
    }

    set connectionStatus(value) {
        if (value != online || offline) {
        alert("connection status must be either online or offline")
        }
        this._connectionStatus = value;
    }

    charLink(dirLink) {
        this.charDirLink = dirLink
    }

    get greeting() {
        return `${this._alias} says: ${this._greeting}`
    }
    get advice() {
        return `${this._alias} says: ${this._advice}`
    }

    get resoAgwe() {
        return `${this._alias} says: ${this._resoAgwe}`
    }

    get status() {
        return `${this._alias}(${this._pronoun})(${this._connectionStatus}): "${this._status}"`;
    }

}

const grim = new Character("grim", "they/them", "", "", "", "is a newbie netrunner", "online");
const shade = new Character("shade", "he/him", " Hey newbie", "steghide is a really useful tool", "i gave you everything you need. read the help section", "Which scop-for-brains bought all my ice!?", "online");
const tBug = new Character("T-Bug", "she/her", "Need something newbie?", "a good netrunner always knows what tools are available and what they do", "i hope you're just window shopping", "Kabuki subnet's all abuzz. Info?", "online");
const bad = new Character("b@d", "they/them", "hey fresh meat... reggie's new lackey yeah?", "learning this stuff takes time and patience", "what!? get to a ripper, i think you got a short circuit", "maelstrom boys got nothin on me!", "online");
const bugBear = new Character("8ug8ear", "she/her", "Which back alley ice box did they dredge you from?", "four things not to fuck with at your stage: corps, corpos, cops and the voodoo boys", "wtf! CTRL, ALT fuckin DELETE yourself outta this sitch. which gonk has you poking the bear?", "Tyger Claws moving around Cherry Blossom, keep away, blastin' circ's!", "online");
const luce = new Character("luce", "she/her", "sorry, don't know you...", "", "", "daydreaming ... stargazing", "online");
const vortex = new Character("vortex", "he/him", "", "", "", "takin a dive. heading for thick I.C.E. see you soon", "offline");

const spaceBoy = new Character("SpaceBoy_66", "he/him", "you seek the wise words of the loa?", "i am not in the business of arming the competition", "sa ou vle ak sòt sa a", "Anyone else hear Lizzy Wizzy's new track!? Shit's outta-this-fuckin-world!", "online");
const ti = new Character("TiNeptune", "he/him", "", "", "enteresan", "", "offline");


/////////////////////////////////////// DIRECTORIES /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Directory {
    constructor(dirName, parentDirName) {
        this._dirName = dirName;
        this._parentDirName = parentDirName;
        this._linkedDirs = {}
        this._fileDirLink = {}
    }

    set dirName(value) {
        if (value.length < 3) {
            alert("Name is too short");
            return;
        }
        this._dirName = value;
    }

    set parentDirName(value) {
        if (value.length < 3) {
            alert("Name is too short")
            return;
        }
        this._parentDirName = value
    }

    linkDirectories(direction, directoryToLink) {
        this._linkedDirs[direction] = directoryToLink
    }

    // childDirs() {
    //     const entries = Object.entries(this._linkedDirs);
    //     let linked = []
    //     for (const entry of entries) {
    //         let text = entry._linkedDirs()            
    //         linked.push(text)
    //     }
    //     return linked;
    // }

    ls() {
        const entries = Object.entries(this._fileDirLink);
        let ls = []
        for (const [directory] of entries) {
            let text = `Current directory ${directory._dirName} contains the following subdirectories ${directory._linkedDirs}`
        }
        return ls;
        // `current directory ${this._dirName} contains the following sub directories:`;
    }

    cd(direction) {
        if (direction in this._linkedDirs) {
            return this._linkedDirs[direction];
        } else {
            document.getElementById("output-description").innerHTML = "No such directory";
            document.getElementById("output-description").innerHTML = this._dirName
            return this;
        }
    }

}

/*
//////////////////////////////// terminal directory tree
root
├── boot
│   └── boot
├── etc
│   └── etc
├── home
│   ├── commands
│   │   ├── cat
│   │   ├── clear
│   │   ├── file
│   │   ├── irc
│   │   ├── ls
│   │   ├── scp
│   │   ├── ssh
│   │   └── steghide
│   └── files
│       ├── bbs_mask_9SOCqTxfm2Zi.dat
│       ├── reso-agwe-datamap
│       ├── ssh
│       │   ├── edgerunnerFtp
│       │   ├── reso-agwe
│       │   └── zetatech-vm-manager
│       └── task
└── usr
    └── usr
*/

// root
const rootDir = new Directory("root", "n/a");
// /
const bootDir = new Directory("/boot", "root");
const etcDir = new Directory("/etc", "root");
const homeDir = new Directory("/home", "root");
const usrDir = new Directory("/usr", "root")
// /home
const commandsDir = new Directory("/commands", "/home")
const filesDir = new Directory("/files", "/home")
// /home/files
const sshDir = new Directory("/ssh", "/files");

const ircHome = new Directory("irc", "n/a")


/*
//////////////////////////  ssh server directory tree

├── bbs_mask_0Hp8BAZ8gkF8
│   └── permission denied
├── bbs_mask_2mGUUHfQIk0t
│   └── permission denied
├── bbs_mask_9SOCqTxfm2Zi
│   ├── 91E0C5NMg5xE
│   ├── HjTESlk7aw4b
│   ├── M9KFZKUlring
│   ├── p7FzTKa13OhG
│   │   ├── ruleset
│   │   ├── ufw.conf.d
│   │   └── whitelist
│   │       ├── jeon-kiri
│   │       ├── leon
│   │       ├── maman-briggite
│   │       ├── moseley
│   │       ├── mr-hands
│   │       ├── placide
│   │       └── ti-neptune
│   └── saoXGjvToAlh
├── bbs_mask_hMlMhTNGxi05
│   └── permission denied
├── bbs_mask_XpPkmHxDgPfN
│   └── permission denied
└── root
    └── permission denied
*/
const resoAgweDir = new Directory("reso-agwe", "n/a")
const bbs_mask_0Hp8BAZ8gkF8 = new Directory("bbs_mask_0Hp8BAZ8gkF8", "reso-agwe");
const bbs_mask_2mGUUHfQIk0t = new Directory("bbs_mask_2mGUUHfQIk0t", "reso-agwe");
const bbs_mask_9SOCqTxfm2Zi = new Directory("bbs_mask_9SOCqTxfm2Zi", "reso-agwe");

const p7FzTKa13OhG = new Directory("p7FzTKa13OhG", "bbs_mask_9SOCqTxfm2Zi");
const whitelist = new Directory("whitelist", "p7FzTKa13OhG");

const bbs_mask_hMlMhTNGxi05 = new Directory("bbs_mask_hMlMhTNGxi05", "reso-agwe");
const bbs_mask_XpPkmHxDgPfN = new Directory("bbs_mask_XpPkmHxDgPfN", "reso-agwe");

// console.log(bbs_mask_0Hp8BAZ8gkF8.ls)

//////////////////////////////////////// FILES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class File {
    constructor(fileName, fileType, fileAccess, fileOwner, fileCreator, fileInfo, fileHiddenInfo) {
        this._fileName = fileName;                  // [0]        
        this._fileType = fileType;                  // [1]
        this._fileAccess = fileAccess;              // [2]
        this._fileOwner = fileOwner;                // [3]
        this._fileCreator = fileCreator;            // [4]
        this._fileInfo = fileInfo;                  // [5]
        this._fileHiddenInfo = fileHiddenInfo;      // [6]
        this._fileDirLink = {}
    }
    set fileName(value){
        if (value.length < 3) {
            alert("That is not a valid filename length")
        }
        this._fileName = value
    }

    set fileType(value){
        if (value.length < 3) {
            alert("That is not a valid file type length")
        }
        this._fileType = value
    }

    set fileAccess(value){
        if (value.length < 3) {
            alert("That is not a valid file access length")
        }
        this._fileAccess = value
    }

    set fileOwner(value){
        if (value.length < 3) {
            alert("That is not a valid file owner length")
        }
        this._fileOwner = value
    }

    set fileCreator(value){
        if (value.length < 3) {
            alert("That is not a valid file creator length")
        }
        this._fileCreator = value
    }

    set fileInfo(value){
        if (value.length < 3) {
            alert("That is not a valid file info length")
        }
        this._fileInfo = value
    }

    set fileHiddenInfo(value){
        if (value.length < 3) {
            alert("That is not a valid file hidden info length")
        }
        this._fileHiddenInfo = value
    }   

    linkToDir(fileDirectory) {
        this._fileDirLink = fileDirectory
    }

    get cat() {
        return `${this._fileInfo}`;
    }

    get file() {
        return `name: ${this._fileName} || filetype: ${this._fileType} || permissions: ${this._fileAccess} || owner: ${this._fileOwner} || creator: ${this._fileCreator}`;
    }

    get steghide() {
        if (this._fileHiddenInfo === "n/a") {
            return `This file does not contain any hidden data`
        } else {
            return `${this._fileHiddenInfo}`;
        }
    }


}

// / files
const boot = new File("boot", "elf", "root systemd init storage", "root", "root", "permission denied", "permission denied");
const etc = new File("etc", "elf", "root systemd storage", "root", "root", "permission denied", "permission denied");
const usr = new File("usr", "elf", "storage systemd", "root", "root", "permission denied", "permission denied")
// /home/command files
const cat = new File("cat", "bash script", "storage", "grim", "root", "print and concatenate files", "n/a");
const clear = new File("clear", "bash script", "term", "grim", "root", "clear the screen of the terminal", "n/a");
const file = new File("file", "bash script", "storage", "grim", "root", "prints the metadata of a specified file", "n/a");
const irc = new File("irc", "bash script", "storage network dbus systemd gpg-sha", "grim", "root", "(I)nternet (R)elay (C)hat. Text based instant messaging system designed for one to one or group communications", "n/a");
const ls = new File("ls", "bash script", "storage", "grim", "root", "list contents of current directory", "n/a");
const scp = new File("scp", "bash script", "storage network repeat cron", "grim", "root", "copies a file from a directory to a remote directory using the ssh protocol", "n/a")
const ssh = new File("ssh", "bash script", "network dbus systemd gpg-sha", "grim", "root", "Secure Shell is a protocol to securely log onto remote systems to execute commands on a remote server", "n/a");
const steghide = new File("steghide", "bash script", "storage systemd gpg-sha", "grim", "root", "steganography tool to extract data hidden within a file", "well done. You've successfully used steghide!");
// /home/files files
const task = new File("task", "text", "storage", "grim", "root", "Once you've gotten to grips with using the terminal a bit I have a task for you. A test of competency. I left you a gift. Within is some data you will need and a file 'bbs_mask_9SOCqTxfm2Zi.dat'. I need you to get that on a server. You'll need to ssh into the server ip and upload the file.", "hint: password is hidden in datamap file");
const resoAgweDatamap = new File("reso-agwe-datamap", "text", "storage", "grim shade", "shade", "See map in help section of the interface. Data too precious to have just sitting in a live environment here", "reso-agwe ssh pass CEnlgPPRUS9thKxOHBXijSi3WQI3n3B69zzoJt8J");
const bbsMaskPayload = new File("bbs_mask_9SOCqTxfm2Zi.dat", "encrypted archive", "root network systemd init storage cpustate powerstate i/o-bus repeat cron", "root", "r-As\;31zpIk^x+w[|94-2R4u1hb8^$M0-PH94QX1nZt-gl\InS02vzT3X*~q-a", "&5MXk5V9g341mizPw0MMy+#1vHTkbSe?3%%3_[+#8X#52w-3MDmztR|yaL?WWo^G%", "^V&IWyy!Y[?PSjwLcN8XcK-I*wGb'970CgCTMilETAo$!SrJ~zW2QauG2MvgAD'x");
// /home/files/ssh files
const zetatechVM = new File("zetatech-vm-manager", "text", "storage", "grim shade", "shade", "100.216.236.215", "n/a");
const edgerunnerFtp = new File("edgerunnerFTP", "text", "storage", "grim shade", "shade", "253.209.6.253", "n/a");
const resoAgwe = new File("reso-agwe", "text", "storage", "grim shade", "shade", "47.227.191.100", "n/a");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ssh sever files
const a91EOC5NMg5xE = new File("91E0C5NMg5xE", "encrypted archive", "root storage network", "root", "root", "JKJSxHQ~3kLe[B*6d9AslIly2B4UZbhiRd3~Pr^HzdSeoFprA1~0DG;9K1'HQUUQ", "n/a");
const bHjTRSlk7aw4b = new File("HjTRSlk7aw4b", "encrypted archive", "root storage network", "root", "root", "zQungkqNf*j?-TQ0~?q[rHEXWDph~vk-UHef8[g1Pm|~ucVJcDloQ:E::Wht;ej-", "n/a");
const cM9KFZKUlring = new File("M9KFZKUlring", "encrypted archive", "root storage network", "root", "root", "5GuLEnMe|9[x3%riy]QQyx~p_T,Wh1:AzYz\cjg[!*'_4!~FV?#0Cy?;,o'+4p+[", "n/a");
const esaoXGjvToAlh = new File("saoXGjvToAlh", "encrypted archive", "root network i/o-bus gpg-sha", "root tiNeptune", "root", "DcfkzA2v~0OU7:N**VFV+|O8ZqG~[RK1Dl!s8IXuHZ:_tcOdkktA4GmE,h[O\#Z_", "pa tèlman parese tan sa a, gen aksè konfigirasyon");
// ssh server /p7FzTKa13OhG
const ruleset = new File("ruleset", "text", "storage network cron", "root tiNeptune", "root", "tcp/ip i/o = in | udp i/o = i/o | bbs mask protocol = sha2048{key = root/var/sha.d/lA&yhTW-.hash}", "n/a")
const ufwConf = new File("ufw.conf.d", "text", "root storage network cron", "root tiNeptune", "root", "tcp/udp-ip: port 5133 = open | tcp/udp-ip: port 1-5132 = closed && tcp/udp-ip: port 5134-* = closed", "n/a")
// ssh server /p7FzTKa13Ohg/whitelist
const jeonKiri = new File("jeon-kiri", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 251.45.27.176", "n/a");
const leon = new File("leon", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 56.35.227.238", "n/a");
const mamanBriggite = new File("maman-briggite", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 68.225.7.23", "n/a");
const moseley = new File("moseley", "text", "storage network", "root", "root", "static ip: 106.14.156.224", "casefile:cYt]09*n!,H+ operation: golden jackal");
const mrHands = new File("mr-hands", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 226.126.32.203", "n/a");
const placide = new File("placide", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 211.98.124.26", "n/a");
const tiNeptune = new File("ti-neptune", "text", "storage network", "root tiNeptune", "tiNepture", "static ip: 36.155.4.191", "n/a");

// console.log(a91EOC5NMg5xE.file)

//////////////////////////////////////// LINKS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// CHARACTERS
grim.charLink(ircHome);
shade.charLink(ircHome);
tBug.charLink(ircHome);
bad.charLink(ircHome);
bugBear.charLink(ircHome);
luce.charLink(ircHome);
vortex.charLink(ircHome);

spaceBoy.charLink(ircHome);
ti.charLink(ircHome);

//// DIRECTORIES
// terminal

// bootDir.linkDirectories("child", rootDir);
// etcDir.linkDirectories("child", rootDir);
// homeDir.linkDirectories("child", rootDir);
// usrDir.linkDirectories("child", rootDir)

// commandsDir.linkDirectories("child", homeDir);
// filesDir.linkDirectories("child", homeDir);

// sshDir.linkDirectories("child", filesDir);


// ssh server

// bbs_mask_0Hp8BAZ8gkF8.linkDirectories("child", resoAgweDir);
// bbs_mask_2mGUUHfQIk0t.linkDirectories("child", resoAgweDir);
// bbs_mask_9SOCqTxfm2Zi.linkDirectories("child", resoAgweDir);
// bbs_mask_hMlMhTNGxi05.linkDirectories("child", resoAgweDir);
// bbs_mask_XpPkmHxDgPfN.linkDirectories("child", resoAgweDir);

// p7FzTKa13OhG.linkDirectories("child", bbs_mask_9SOCqTxfm2Zi);
// whitelist.linkDirectories("child", p7FzTKa13OhG);


//// modified link ed directories copy
rootDir.linkDirectories("parent", bootDir);
rootDir.linkDirectories("parent", etcDir);
rootDir.linkDirectories("parent", homeDir);
rootDir.linkDirectories("parent", usrDir);

bootDir.linkDirectories("child0", rootDir);
etcDir.linkDirectories("child1", rootDir);
homeDir.linkDirectories("child2", rootDir);
usrDir.linkDirectories("child3", rootDir)

homeDir.linkDirectories("parent", commandsDir);
homeDir.linkDirectories("parent", filesDir);

commandsDir.linkDirectories("child0", homeDir);
filesDir.linkDirectories("child1", homeDir);

filesDir.linkDirectories("parent", sshDir);

sshDir.linkDirectories("child0", filesDir);


// ssh server

resoAgweDir.linkDirectories("parent", bbs_mask_0Hp8BAZ8gkF8);
resoAgweDir.linkDirectories("parent", bbs_mask_2mGUUHfQIk0t);
resoAgweDir.linkDirectories("parent", bbs_mask_9SOCqTxfm2Zi);
resoAgweDir.linkDirectories("parent", bbs_mask_XpPkmHxDgPfN);
resoAgweDir.linkDirectories("parent", bbs_mask_hMlMhTNGxi05);

bbs_mask_0Hp8BAZ8gkF8.linkDirectories("child0", resoAgweDir);
bbs_mask_2mGUUHfQIk0t.linkDirectories("child1", resoAgweDir);
bbs_mask_9SOCqTxfm2Zi.linkDirectories("child2", resoAgweDir);
bbs_mask_hMlMhTNGxi05.linkDirectories("child3", resoAgweDir);
bbs_mask_XpPkmHxDgPfN.linkDirectories("child4", resoAgweDir);

bbs_mask_9SOCqTxfm2Zi.linkDirectories("parent", p7FzTKa13OhG);

p7FzTKa13OhG.linkDirectories("child0", bbs_mask_9SOCqTxfm2Zi);

p7FzTKa13OhG.linkDirectories("parent", whitelist);

whitelist.linkDirectories("child0", p7FzTKa13OhG);


//// FILES
// terminal

boot.linkToDir(bootDir);
etc.linkToDir(etcDir);
usr.linkToDir(usrDir);

cat.linkToDir(commandsDir);
clear.linkToDir(commandsDir);
file.linkToDir(commandsDir);
irc.linkToDir(commandsDir);
ls.linkToDir(commandsDir);
scp.linkToDir(commandsDir);
ssh.linkToDir(commandsDir);
steghide.linkToDir(commandsDir);

task.linkToDir(filesDir);
resoAgweDatamap.linkToDir(filesDir);
bbsMaskPayload.linkToDir(filesDir);

zetatechVM.linkToDir(sshDir);
edgerunnerFtp.linkToDir(sshDir);
resoAgwe.linkToDir(sshDir);

// ssh server

a91EOC5NMg5xE.linkToDir(resoAgweDir);
bHjTRSlk7aw4b.linkToDir(resoAgweDir);
cM9KFZKUlring.linkToDir(resoAgweDir);
esaoXGjvToAlh.linkToDir(resoAgweDir);

ruleset.linkToDir(p7FzTKa13OhG);
ufwConf.linkToDir(p7FzTKa13OhG);

jeonKiri.linkToDir(whitelist);
leon.linkToDir(whitelist);
mamanBriggite.linkToDir(whitelist);
moseley.linkToDir(whitelist);
mrHands.linkToDir(whitelist);
placide.linkToDir(whitelist);
tiNeptune.linkToDir(whitelist);

// console.log()

//////////////////////////////////////// BUTTON TOGGLERS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const toggleButtonSectionIds = ["help-section", "readme", "shell-help", "glossary", "software-section", "readme-software", "music", "notes", "themes", "welcome", "output", "map"];
const toggleHoverSectionIds = ["ls", "cat", "clear", "file", "ssh", "steghide", "arasaka", "militech", "netwatch"]

function toggleSection(section) {
    let x = document.getElementById(section);
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";

    }
}

//////////////////////////////////////// THEMES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tried for ages to set themes based on modifying element css classes, in the end I couldn't find a not super dumb way to do it.
// Resorted to just swapping out css files for theme changes. Didn't realise at the time that's a bad method :(((((


const darkToggle = document.getElementById("theme-dark");
const highToggle = document.getElementById("theme-high-contrast");
const arasakaToggle = document.getElementById("theme-arasaka");
const whiteToggle = document.getElementById("theme-white");
const yellowToggle = document.getElementById("theme-yellow");
const blueToggle = document.getElementById("theme-bsod");
const themesToggle = document.getElementById("themes")

const cssLink = document.getElementById("css");

darkToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "100%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_dark.css")
})

highToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "100%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_high.css")
})

arasakaToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "100%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_arasaka.css")
})

whiteToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "100%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_white.css")
})

yellowToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "100%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_yellow.css")
})

blueToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "100%";
    cssLink.setAttribute("href", "css/netrunner_blue.css")
})



// legacy themeing function --- still might be useful as a reference

//     let borders = document.querySelectorAll(".borders").forEach(element => {
//         element.classList.add("borders-white");
//         element.classList.remove("borders");
//     });
// }



//////////////////////////////////////// GAME CONTROLS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// win / loss 

const header = document.getElementById("header");
const title = document.getElementById("pagetitle")
const leftPanel = document.getElementById("left-panel");
const centrePanel = document.getElementById("centre-panel")
const rightPanel = document.getElementById("right-panel");
const footer = document.getElementById("footer")

function gameLose() {
    // TiNeptune discovers your intrusion
    header.style.backgroundColor = "rgb(220, 0, 20)";
    title.innerHTML = "intrusion detected. kernel panic! [sh: sudo rm -rf /*] "
}

function gameWin() {
    // you successfully upload the payload without ti neptune discovering you
    header.style.backgroundColor = "rgba(50, 180, 0)";
    title.innerHTML = "payload uploaded successfully!"
}

///////////////// directory control

function directoryMonitor(directory) {

    document.getElementById("output-dir-name").innerText = "Current directory:" + directory._dirName;
    document.getElementById("output-dir-parent").innerText = directory._dirName + " has a parent directory of " + directory._parentDirName;
    // console.log(Object.entries(currentDirectory.linkedDirs))
    document.getElementById("output-dir-children").innerText = Object.entries(directory.childDirs());
    document.getElementById("output-files").innerText = directory._fileDirLink
    console.log(directory._fileDirLink)
}

/////////////////// i/o control


function directoryMonitor(directory) {

    document.getElementById("output-dir-name").innerText = "Current directory:" + directory._dirName;
    document.getElementById("output-dir-parent").innerText = directory._dirName + " has a parent directory of " + directory._parentDirName;
    // console.log(Object.entries(currentDirectory.linkedDirs))
    // document.getElementById("output-dir-children").innerText = Object.entries(directory.childDirs());
    document.getElementById("output-files").innerText = directory._fileDirLink
    // console.log(directory._fileDirLink)
}

function login() {

    // start directory
    currentDirectory = homeDir
    // console.log(currentDirectory)
    directoryMonitor(currentDirectory)
    // displayDirInfo(currentDirectory)

    // parse command input
    const inputHistory = []
    const outputHistory = []
    let inputBox = document.getElementById("input");
    let outputBox = document.getElementById("output-description");


    inputBox.focus();
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            cmd = inputBox.value;
            inputHistory.push(cmd);
            (inputBox.value = '');
            outputBox.innerHTML = inputHistory.join("<br>");
        } else {
            // takes input value and prints to output box and wipes input field
        }
    })
};


login();