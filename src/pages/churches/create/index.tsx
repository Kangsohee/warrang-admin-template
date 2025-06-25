import Register from "@/features/church/form/Register";
import { useBreadcrumbStore } from "@/stores/breadcrumb";
import { useEffect } from "react";

export function Component() {
    const { updateHistories } = useBreadcrumbStore();

    useEffect(() => {
        updateHistories([{ name: 'Churches', pathname: 'churches' }, { name: 'Create', pathname: 'churches/create' }])
    }, [updateHistories]);

    return (
        <Register />
    );
}

Component.displayName = 'ChurchCreatePage';