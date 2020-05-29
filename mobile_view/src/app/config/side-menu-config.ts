export interface ISideMenuTitles {
    home: string;
    wallets: string;
    myGoal: string;
    family: string;
    settings: string;
}

export function setSideMenuTitles(home, wallets, myGoal, family, settings): ISideMenuTitles {
    return {
        home: home,
        wallets: wallets,
        myGoal: myGoal,
        family: family,
        settings: settings,
    };
}


export function sideMenuConfig(translatedTitles: ISideMenuTitles): any[] {
    return [
        {
            title: translatedTitles.home,
            url: '',
            icon: 'home'
        },
        {
            title: translatedTitles.wallets,
            url: '/wallets',
            icon: 'albums'
        },
        {
            title: translatedTitles.myGoal,
            url: '/my-goal',
            icon: 'contract'
        },
        {
            title: translatedTitles.family,
            url: '/family',
            icon: 'contacts'
        },
        {
            title: translatedTitles.settings,
            url: '/settings',
            icon: 'hammer'
        },
    ];
}
