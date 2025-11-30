export declare const userService: {
    getOne(): Promise<any | null>;
    groupUser(rows: any[]): {
        id: any;
        fullname: any;
        email: any;
        age: any;
        photourl: any;
        summary: any;
        created_at: any;
        updated_at: any;
        user_info: {
            address: any;
            phone: any;
            instagram: any;
            twitter: any;
            linkedin: any;
            facebook: any;
            degree: any;
            cv_url: any;
            github: any;
        };
        titles: {
            id: any;
            title: any;
        }[];
        skills: {
            id: any;
            title: any;
            grade: any;
        }[];
        experiences: {
            id: any;
            title: any;
            from: any;
            to: any;
            is_present: any;
            description: any;
            place: any;
        }[];
        portfolios: unknown[];
    };
};
//# sourceMappingURL=index.service.d.ts.map