export const getEndpoint = (productionRoute: string, developmentRoute: string) => {
    return import.meta.env.VITE_ENV === "production"
        ? import.meta.env[productionRoute]
        : developmentRoute;
};

export const devPrint = (message: string, ...rest: []) => {
    if (import.meta.env.VITE_ENV === "development") {
        console.log(message, ...rest);
    }
};
