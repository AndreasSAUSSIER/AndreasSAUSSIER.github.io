/* =============================================
   DONNÉES PROJETS
   Pour modifier : change les champs directement ici.
   - status : "done" | "wip" | "fail" | "pause"
   - tags   : tableau de strings (catégories pour les filtres)
   - mainImage : chemin de l'image de couverture
   - images : tableau des chemins des images pour la modale
============================================= */
const projects = [
    {
        id: 18,
        title: "Façade PC custom",
        date: "Décembre 2025",
        status: "done",
        tags: ["3D / Impression"],
        excerpt: "Nouvelle façade pour un Corsair 3000D, avec fresque sculptée sous Blender dans le style de H.R. Giger (Alien/Xénomorphe). 6 pièces imprimées en 3D, ~80h d'impression.",
        mainImage: "Boitier_Alien_0.gif",
        images: [
            "Boitier_Alien_Main.jpg",
            "Boitier_Alien_4.jpg",
            "Boitier_Alien_0.gif",
            "Boitier_Alien_0.png",
            "Boitier_Alien_1.png",
            "Boitier_Alien_2.png",
            "Boitier_Alien_3.jpg"
        ],
        skills: ["AC11.02 | Réaliser un prototype pour des solutions techniques matériel et/ou logiciel"],
        sections: [
            {
                title: "Introduction",
                content: "Remplacement de la façade d'un boîtier Corsair 3000D par une création personnalisée inspirée de l'œuvre de Hans Ruedi Giger (créateur de l'Alien/Xénomorphe)."
            },
            {
                title: "Fabrication — façade",
                content: "La façade (trop grande pour l'Ender 3) a été découpée en 4 pièces modélisées sur SolidWorks (~9 h d'impression chacune)."
            },
            {
                title: "Fabrication — fresque",
                content: "Sculptée sur Blender avec des motifs alien, corps humains et Xénomorphes. Divisée en 2 pièces, ~18 h d'impression chacune. Au total 6 pièces imprimées."
            },
            {
                title: "Résultat",
                content: "Toutes les pièces assemblées et installées sur le boîtier."
            }
        ]
    },
    {
        id: 17,
        title: "Robot Labyrinthe",
        date: "Décembre 2025",
        status: "done",
        tags: ["Électronique", "Embarqué", "3D / Impression", "Mécanique", "Universitaire"],
        excerpt: "L'objectif était de réaliser un robot capable de résoudre un labyrinthe, puis une fois fini de le résoudre en empruntant le meilleur chemin possible.",
        mainImage: "Robot_Lab_Main.gif",
        images: [
            "Robot_Lab_Main.gif",
            "Robot_Lab_0.png",
            "Robot_Lab_1.jpg",
            "Robot_Lab_2.png",
            "Robot_Lab_4.png"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC22.01 | Identifier les tests et mesures à mettre en place pour valider le fonctionnement d’un système",
            " AC32.02 | Proposer une solution corrective à un dysfonctionnemen",
            " AC12.02 | Identifier un dysfonctionnement",
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
            " AC24.02ESE | Évaluer la conformité du système",
            " AC34.02ESE | Exécuter la mise en service d’un système en respectant la procédure"
        ],
        sections: [
            {
                title: "Introduction",
                content: "Dans le cadre de notre 3ème année de BUT, nous devions réaliser en groupe un robot capable de résoudre un labyrinthe, puis une fois fini de le re-résoudre en empruntant le meilleur chemin possible."
            },
            {
                title: "Fabrication — PCB",
                content: "Le robot est contrôlé par une Nucleo F303K8, c'est une carte que l'on avait à disposition et que l'on était habitué à manipuler. La détection des lignes se fait grâce à 5 capteurs IR, 2 pour s'assurer du suivi de la ligne, 2 pour vérifier la direction du labyrinthe et un autre pour vérifier que le robot suit bien la ligne."
            },
            {
                title: "Fabrication — Châssis",
                content: "Le châssis a été modélisé sur SolidWorks. Les deux roues sont éloignées des capteurs IR. Ce sont le sens des moteurs gauche et droit qui vont permettre au robot de pivoter, d'où la nécessité d'une roue folle. Il a ensuite été imprimé en PLA."
            },
            {
                title: "Programmation",
                content: "Pour le suivi de la ligne, on utilise un correcteur Proportionnel et Dérivée (nous avons aussi utilisé un correcteur PID, mais le correcteur PD fonctionnait mieux). Pour résoudre le labyrinthe, nous utilisions un algorithme de main droite. Vous pouvez observer l'algorigramme du code dans les images ci-dessus."
            },
            {
                title: "Résultat",
                content: "Le robot a pu à plusieurs reprises finir le labyrinthe, puis le re-résoudre de la meilleure façon."
            }
        ]
    },
    {
        id: 16,
        title: "Enrouleur de filament",
        date: "Été 2025",
        status: "fail",
        tags: ["Électronique", "Embarqué", "3D / Impression", "Mécanique"],
        excerpt: "Machine automatique pour bobiner 330 m de filament PLA suite à une erreur de commande. Pièces entièrement modélisées sur SolidWorks, commandée par STM32.",
        mainImage: "Enrouleur_filament_Main.gif",
        images: [
            "Enrouleur_filament_Main.jpg",
            "Enrouleur_filament_0.png",
            "Enrouleur_filament_1.png",
            "Enrouleur_filament_2.jpg",
            "Enrouleur_filament_3.png",
        ],
        skills: [
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
            " AC24.02ESE | Évaluer la conformité du système",
            " AC34.02ESE | Exécuter la mise en service d’un système en respectant la procédure"
        ],
        sections: [
            {
                title: "Introduction",
                content: "Suite à une livraison de filament PLA non bobiné, l'objectif était de construire une machine pour bobiner automatiquement les 330 mètres."
            },
            {
                title: "Modélisation & mécanique",
                content: "Toutes les pièces modélisées sur SolidWorks puis imprimées en 3D. Un système d'engrenages augmente la vitesse de bobinage. Le fil passe dans un boîtier coulissant gauche-droite via une liaison hélicoïdale (vis sans fin + écrou) entraînée par un moteur pas-à-pas 28BYJ-48."
            },
            {
                title: "Électronique",
                content: "Moteur pas-à-pas 28BYJ-48 commandé par ULN2003APG. Capteur de tour complet + 2 capteurs fin de course. Nucleo STM32F303K8 comme contrôleur principal."
            },
            {
                title: "Résultat",
                content: "La machine fonctionnait (enroulement correct, répartition du fil), mais la bobine reçue était mal conditionnée dès le départ, empêchant une utilisation optimale. Améliorations : ajout d'un moteur pour une autonomie complète, système de changement de bobine."
            }
        ]
    },
    {
        id: 15,
        title: "Bras robotique",
        date: "BUT 2 — 2024",
        status: "done",
        tags: ["Électronique", "Embarqué", "3D / Impression", "Mécanique"],
        excerpt: "Bras robotique réalisé en groupe de 3, à partir d'une imprimante 3D défectueuse. Capable de saisir des objets < 250 g, commandé par STM32 et contrôlable via Bluetooth.",
        mainImage: "Bras_Robot_Main.gif",
        images: [
            "Bras_Robot_Main.gif",
            "Bras_Robot_0.jpg",
            "Bras_Robot_1.jpg",
            "Bras_Robot_2.jpg",
            "Bras_Robot_0.png",
            "Bras_Robot_1.png",
            "Bras_Robot_2.png",
            "Bras_Robot_3.jpg",
            "Bras_Robot_2.gif"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC22.01 | Identifier les tests et mesures à mettre en place pour valider le fonctionnement d’un système",
            " AC32.02 | Proposer une solution corrective à un dysfonctionnemen",
            " AC12.02 | Identifier un dysfonctionnement",
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
            " AC24.02ESE | Évaluer la conformité du système",
            " AC34.02ESE | Exécuter la mise en service d’un système en respectant la procédure"
        ],
        sections: [
            {
                title: "Introduction",
                content: "Projet de groupe (3 personnes) en BUT GEII 2ème année. Objectif : créer un bras robotique capable de saisir des objets de moins de 250 g, en récupérant le châssis et les moteurs d'une imprimante 3D défectueuse."
            },
            {
                title: "Partie mécanique",
                content: "17 pièces différentes ont été modélisées et imprimées en 3D (PLA + PETG pour les pièces sensibles, remplissage 20-30%). La version 2 des pièces d'articulation a réduit le poids de 350 g à 205 g."
            },
            {
                title: "Partie électronique",
                content: "Un STM32 gère l'ensemble : 2 moteurs pas-à-pas via des DRV8825 (alimentation 24 V récupérée sur l'imprimante), 2 servo-moteurs via PWM alimentés par un régulateur 5 V (~18 A). Un capteur magnétique AS5600 mesure l'angle des servos."
            },
            {
                title: "Bluetooth",
                content: "Un module Bluetooth permet le contrôle à distance du bras."
            },
            {
                title: "Résultat",
                content: "Le bras n'a pas été terminé à 100% (projet ambitieux), mais le PCB fonctionnait et le bras bougeait. Problème principal : couple insuffisant des moteurs pas-à-pas."
            }
        ]
    },
    {
        id: 14,
        title: "Montre binaire",
        date: "Mars 2025",
        status: "done",
        tags: ["Électronique", "Embarqué", "3D / Impression"],
        excerpt: "Une montre affichant l'heure en binaire sans microcontrôleur, uniquement des composants logiques, avec batterie Li-Ion rechargeable en USB-C.",
        mainImage: "Montre_Main.jpg",
        images: [
            "Montre_Main.jpg",
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC22.01 | Identifier les tests et mesures à mettre en place pour valider le fonctionnement d’un système",
            " AC12.02 | Identifier un dysfonctionnement",
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
            " AC24.02ESE | Évaluer la conformité du système",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Le but du projet était de réaliser une montre affichant l'heure au format binaire (5 LED pour les heures, 6 pour les minutes). Elle ne devait inclure aucun microcontrôleur — uniquement des composants logiques — et intégrer une batterie rechargeable via USB-C."
            },
            {
                title: "Fonctionnement",
                content: "Un signal de 32 768 Hz est divisé 15 fois pour obtenir un signal de 1 Hz. Des compteurs binaires comptent les secondes, minutes et heures. Un circuit combinatoire génère un reset à chaque dépassement (60s, 60min, 24h). Les LED sont branchées en sortie des compteurs."
            },
            {
                title: "Réalisation",
                content: "Le PCB (3×4 cm) a été conçu sur KiCad, commandé sur JLCPCB, les composants sur LCSC. Le boîtier a été modélisé sur SolidWorks et imprimé en 3D avec un Ender 3."
            },
            {
                title: "Résultat & difficultés",
                content: "Résultat satisfaisant, mais beaucoup de finition manuelle nécessaire. La principale difficulté : trouver les bonnes valeurs de condensateurs pour le quartz 32 768 Hz."
            },
            {
                title: "Améliorations envisagées",
                content: "Intégrer un STM32L0 pour ajouter des fonctionnalités (mini récepteur FM comme la Citizen D031, affichage 7 segments)."
            }
        ]
    },
    {
        id: 13,
        title: "Horloge numérique",
        date: "Février 2025",
        status: "pause",
        tags: ["Électronique"],
        excerpt: "Horloge retro sans microcontrôleur affichant l'heure sur 4 digits 7 segments, construite avec de vieux composants logiques récupérés à l'université.",
        mainImage: "Horloge_Main.gif",
        images: [
            "Horloge_Main.gif",
            "Horloge_Main.jpg",
            "Horloge_0.png",
            "Horloge_1.png"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC22.01 | Identifier les tests et mesures à mettre en place pour valider le fonctionnement d’un système",
            " AC12.02 | Identifier un dysfonctionnement",
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
            " AC24.02ESE | Évaluer la conformité du système",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Horloge numérique sans microcontrôleur, style rétro, affichant l'heure sur 4 afficheurs 7 segments, uniquement avec de vieux composants logiques récupérés à l'IUT."
            },
            {
                title: "Fonctionnement",
                content: "Même principe que la montre binaire pour la génération et le comptage du temps. Conversion BCD → 7 segments via des CD4511BE. Deux boutons poussoirs (anti-rebond RC) permettent d'ajuster les minutes et les heures."
            },
            {
                title: "Résultat",
                content: "Validé fonctionnellement sur 4 breadboards. PCB conçu sous KiCad mais non commandé (taille importante → coût élevé + frais de port). Projet mis en pause."
            }
        ]
    },
    {
        id: 12,
        title: "Jeux Snake",
        date: "Mars 2025 (stage LIRMM)",
        status: "done",
        tags: ["Électronique", "Embarqué", "Logiciel"],
        excerpt: "Snake entièrement fonctionnel sur une XIAO-ESP32-C3, affiché sur une matrice 8×8, codé sans tutoriel, avec boutons poussoirs pour la direction.",
        mainImage: "Snake_Main.gif",
        images: [
            "Snake_Main.gif",
            "Snake_0.jpg",
            "Snake_1.jpg"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC24.01ESE | Appliquer une procédure de fabrication pour implanter les composants matériels et/ou logiciels dans un systèm",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Petit projet réalisé durant le stage au LIRMM (mars 2025) avec les composants disponibles. Objectif : faire un jeu de snake amusant et peu coûteux."
            },
            {
                title: "Composants",
                content: "XIAO-ESP32-C3 (WiFi 2.4 GHz intégré, très compact), matrice LED 8×8, boutons poussoirs pour la direction, assemblés sur un PCB de prototypage."
            },
            {
                title: "Code",
                content: "Codé entièrement sans tutoriel, à partir des connaissances personnelles. Fonctions principales : affichage matriciel, décalages bit à bit pour le déplacement, tableaux de coordonnées pour le corps du serpent, générateur aléatoire pour la pomme, détection collision (queue et pomme), écran Game Over."
            },
            {
                title: "Résultat",
                content: "Snake 100% fonctionnel. Confort de jeu limité par l'aspect visuel. Amélioration souhaitée : PCB dédié + boîtier imprimé en 3D."
            }
        ]
    },
    {
        id: 11,
        title: "Kart électrique",
        date: "2023–2024",
        status: "done",
        tags: ["Électronique", "Embarqué", "3D / Impression", "Mécanique"],
        excerpt: "Kart électrique construit de A à Z à partir d'un hoverboard hors-service, avec un châssis en bois de palette et des pièces imprimées en 3D. Commandé par un Arduino Nano.",
        youtubeId: "Uy8odmMz7vU",
        mainImage: "Kart_Main.gif",
        images: [
            "Kart_Main.gif",
            "Kart_0.jpg",
            "Kart_1.png",
            "Kart_2.png",
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC12.02 | Identifier un dysfonctionnement",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Projet personnel : réaliser un kart électrique avec un maximum de matériaux de récupération, en utilisant les moteurs brushless et la batterie d'un hoverboard HS."
            },
            {
                title: "Moteurs & commande",
                content: "2 moteurs brushless (hoverboard d'origine) commandés par 2 modules achetés sur AliExpress. Un Arduino Nano gère la vitesse via un potentiomètre (pédale d'accélérateur), affiche le pourcentage de vitesse sur un écran OLED, et gère le klaxon."
            },
            {
                title: "Structure",
                content: "Châssis en bois de palette. Pièces délicates modélisées et imprimées en 3D : frein, accélérateur, tableau de bord, volant. Les roues ont été déplacées à l'arrière pour améliorer l'adhérence."
            },
            {
                title: "Direction",
                content: "Direction différentielle : tourner à droite active le moteur droit, tourner à gauche active le moteur gauche. Limite : le kart ne tourne pas si les roues tournent trop lentement."
            },
            {
                title: "Résultat",
                content: "Le kart fonctionne, roule et tourne. Défauts : accélération très violente (cabrage au démarrage possible), autonomie < 10 min avec la vieille batterie. Améliorations : meilleure batterie, filtre sur l'accélération, sécurité renforcée."
            }
        ]
    },
    {
        id: 10,
        title: "Patator",
        date: "Début 2024",
        status: "done",
        tags: ["Électronique", "Embarqué", "3D / Impression", "Mécanique"],
        excerpt: "Réaliser un Patator posé sur une tourelle pouvant pivoter dans 2 axes, et pouvant être contrôlé à distance.",
        youtubeId: "mCGZ99Jp-p8",
        mainImage: "Patator_4.gif",
        images: [
            "Patator_6.gif",
            "Patator_1.gif",
            "Patator_2.gif",
            "Patator_3.gif",
            "Patator_4.gif",
            "Patator_5.gif"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC12.02 | Identifier un dysfonctionnement",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Projet personnel : Réaliser un Patator posé sur une tourelle pouvant pivoter dans 2 axes, et pouvant être contrôlé à distance. De plus, il pourra se recharger automatiquement en munition."
            },
            {
                title: "La tourelle",
                content: "Les deux mouvements de la tourelle sont gérés par des servo moteurs, contrôlés par une Arduino UNO. La détonation se fait via un transformateur haute tension (module disponible sur Aliexpress), et le rechargement automatique se fait grâce à un petit servo moteur qui fait s'écouler la balle au fur et à mesure."
            },
            {
                title: "La manette",
                content: "Elle est contrôlée par un ESP32-C3 XIAO, c'est un petit microcontrôleur assez compact, idéal pour ce genre de projet. Pour communiquer avec la tourelle, la manette utilise des modules RF (433Mhz). Il y a aussi un écran OLED, un joystick pour contrôler les axes de la tourelle, ainsi qu'un bouton Fire et Reload."
            },
            {
                title: "Résultat",
                content: "Tous les systèmes de la tourelle fonctionnaient, le seul problème était la transmission RF, une utilisation plus poussée des modules ou un autre moyen de communication aurait certainement réglé le problème."
            }
        ]
    },
    {
        id: 9,
        title: "Robot suiveur de ligne",
        date: "Mai — Juin 2023",
        status: "done",
        tags: ["Électronique", "Universitaire"],
        excerpt: "Carte électronique pour robot suiveur de ligne 100% analogique. Deux capteurs IR, signal triangle pour générer les PWM moteur, amplification de puissance par transistors.",
        mainImage: "Suiveur_Ligne_Main.gif",
        images: [
            "Suiveur_Ligne_Main.gif",
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC12.02 | Identifier un dysfonctionnement",
        ],
        sections: [
            {
                title: "Introduction",
                content: "Projet universitaire : réaliser la carte électronique commandant un robot suiveur de ligne analogique (aucun microcontrôleur)."
            },
            {
                title: "Fonctionnement",
                content: "Deux capteurs IR détectent l'écart à la ligne (surface blanche = plus réfléchissante). Un signal triangle est comparé aux tensions capteurs pour générer deux PWM moteur. Le rapport cyclique varie selon l'écartement, corrigeant la trajectoire. Des transistors amplifient la puissance (diode de roue libre incluse)."
            }
        ]
    },
    {
        id: 8,
        title: "Dé électronique",
        date: "Nov – Déc 2023",
        status: "done",
        tags: ["Électronique", "Universitaire"],
        excerpt: "Dé 100% analogique affichant un chiffre de 1 à 6 sur un afficheur 7 segments. Pseudo-aléatoire obtenu en stoppant un compteur rapide à l'appui d'un bouton.",
        mainImage: "Montre_Binaire_Main.png",
        images: [
            "Montre_Binaire_Main.png",
            "https://via.placeholder.com/800x600/2a2a2c/22c55e?text=Image+Montre+2",
            "https://via.placeholder.com/800x600/2a2a2c/f59e0b?text=Image+Montre+3"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC12.01 | Appliquer une procédure d’essais",
            " AC12.02 | Identifier un dysfonctionnement",
            " AC12.03 | Décrire un dysfonctionnement"
        ],
        sections: [
            {
                title: "Introduction",
                content: "Projet universitaire : dé électronique 100% analogique, affichant un chiffre entre 1 et 6 sur un 7 segments lors de l'appui sur un bouton."
            },
            {
                title: "Fonctionnement",
                content: "Sans appui sur le bouton, un compteur tourne de 1 à 6 à ~1 000 Hz (signal généré par un RC + AOP). L'appui arrête l'horloge, fige le compteur à une valeur pseudo-aléatoire. La valeur est convertie via un convertisseur BCD → 7 segments."
            },
            {
                title: "Résultat",
                content: "Dé entièrement fonctionnel, vérifié à l'oscilloscope. L'aspect pseudo-aléatoire était bien simulé."
            }
        ]
    },
    {
        id: 7,
        title: "Testeur de batterie",
        date: "Sep – Nov 2023",
        status: "done",
        tags: ["Électronique", "Universitaire"],
        excerpt: "Premier projet universitaire (IUT GEII). Testeur de batterie analogique avec affichage par LED selon la tension, protection contre les inversions de polarité.",
        mainImage: "Testeur_Batt_Main.png",
        images: [
            "Testeur_Batt_Main.png"
        ],
        skills: [
            " AC11.01 | Produire une analyse fonctionnelle d’un système simple",
            " AC11.02 | Réaliser un prototype pour des solutions techniques matériel et/ou logiciel"
        ],
        sections: [
            {
                title: "Introduction",
                content: "Premier projet réalisé à l'IUT. Testeur de batterie alimenté par la batterie elle-même, affichant la tension approximative via des LED."
            },
            {
                title: "Fonctionnement",
                content: "Protection par diode contre les inversions de polarité. Tension divisée par des ponts diviseurs (résistances + potentiomètre). Tension de référence générée par une diode zener (6,7 V). Comparaison avec la tension adaptée → allumage des LED correspondantes."
            },
            {
                title: "Résultat",
                content: "Le testeur fonctionnait correctement. Tous les composants ont été soudés sur PCB en fin de projet."
            }
        ]
    }
];

/* =============================================
   HELPERS
============================================= */
const statusLabel = { done: "Terminé", wip: "En cours", fail: "Échec", pause: "En pause" };
const statusClass = { done: "badge-done", wip: "badge-wip", fail: "badge-fail", pause: "badge-pause" };

function buildCard(p) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.tags = p.tags.join(",");

    const imgHtml = p.mainImage 
        ? `<div class="card-image-container"><img src="${p.mainImage}" alt="${p.title}" class="card-image"></div>`
        : '';

    card.innerHTML = `
        ${imgHtml}
        <div class="card-header">
            <div class="card-title">${p.title}</div>
            <span class="badge ${statusClass[p.status]}">${statusLabel[p.status]}</span>
        </div>
        <div class="card-meta">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            <span class="card-date">${p.date}</span>
        </div>
        <div class="card-excerpt">${p.excerpt}</div>
        <div class="card-footer">
            <button class="card-btn">Voir le détail →</button>
        </div>
    `;

    card.querySelector(".card-btn").addEventListener("click", () => openModal(p));
    card.addEventListener("click", (e) => {
        if (!e.target.closest(".card-btn")) openModal(p);
    });
    return card;
}

function openModal(p) {
    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-meta").innerHTML = `
        <span class="badge ${statusClass[p.status]}">${statusLabel[p.status]}</span>
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        <span class="card-date">${p.date}</span>
    `;

    // 1. Carrousel d'images
    let carouselHtml = '';
    if (p.images && p.images.length > 0) {
        carouselHtml = `
            <div class="carousel" id="modal-carousel">
                ${p.images.length > 1 ? `<button class="carousel-btn carousel-prev">❮</button>` : ''}
                
                ${p.images.map((img, index) => `
                    <img src="${img}" class="carousel-img ${index === 0 ? 'active' : ''}" alt="${p.title} - image ${index + 1}">
                `).join('')}
                
                ${p.images.length > 1 ? `<button class="carousel-btn carousel-next">❯</button>` : ''}
                
                ${p.images.length > 1 ? `
                <div class="carousel-dots">
                    ${p.images.map((_, index) => `<div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('')}
                </div>
                ` : ''}
            </div>
        `;
    }

    // 2. Sections de texte
    const sectionsHtml = p.sections.map(s => `
        <div class="modal-section">
            <div class="modal-section-title">${s.title}</div>
            ${s.list
                ? `<ul>${s.list.map(i => `<li>${i}</li>`).join("")}</ul>`
                : `<p>${s.content}</p>`
            }
        </div>
    `).join("");

    // 3. Lecteur Vidéo (S'il y a un youtubeId)
    let videoHtml = '';
    if (p.youtubeId) {
        videoHtml = `
            <div class="modal-video-container">
                <div class="modal-video-title">Démonstration vidéo</div>
                <div class="iframe-wrapper">
                    <iframe src="https://www.youtube.com/embed/${p.youtubeId}?rel=0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    }

    // 4. Compétences apportées (S'il y en a dans le projet)
    let skillsHtml = '';
    if (p.skills && p.skills.length > 0) {
        skillsHtml = `
            <div class="modal-section modal-skills-container">
                <div class="modal-section-title">Compétences développées</div>
                <div class="modal-skills-grid">
                    ${p.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // On assemble le tout : Carrousel + Texte + Vidéo + Compétences
    document.getElementById("modal-body").innerHTML = carouselHtml + sectionsHtml + videoHtml + skillsHtml;

    // Logique du carrousel
    if (p.images && p.images.length > 1) {
        let currentIndex = 0;
        const imgs = document.querySelectorAll('.carousel-img');
        const dots = document.querySelectorAll('.carousel-dot');
        const btnNext = document.querySelector('.carousel-next');
        const btnPrev = document.querySelector('.carousel-prev');

        function showImage(index) {
            imgs.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentIndex = index;
            if (currentIndex >= imgs.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = imgs.length - 1;
            
            imgs[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        btnNext.addEventListener('click', () => showImage(currentIndex + 1));
        btnPrev.addEventListener('click', () => showImage(currentIndex - 1));
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                showImage(parseInt(e.target.dataset.index));
            });
        });
    }

    // Ouverture
    const overlay = document.getElementById("modal-overlay");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("modal").scrollTop = 0;
}

function closeModal() {
    document.getElementById("modal-overlay").classList.remove("open");
    document.body.style.overflow = "";
    
    // IMPORTANT : Coupe le son de la vidéo Youtube en vidant la source de l'iframe à la fermeture
    const iframe = document.querySelector('#modal-body iframe');
    if (iframe) {
        iframe.src = "";
    }
}

/* =============================================
   INIT
============================================= */
const grid = document.getElementById("projects-grid");

projects.sort((a, b) => b.id - a.id);

projects.forEach(p => grid.appendChild(buildCard(p)));

// Filtres
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        let visible = 0;
        document.querySelectorAll(".project-card").forEach(card => {
            const tags = card.dataset.tags;
            const show = filter === "all" || tags.includes(filter);
            card.classList.toggle("hidden", !show);
            if (show) visible++;
        });
        document.getElementById("project-count").textContent =
            filter === "all"
                ? `${projects.length} projets au total`
                : `${visible} projet${visible > 1 ? "s" : ""} — ${filter}`;
    });
});

// Fermeture modale
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });