export function mapTabStateToTopLevel(tabState) {
    return (tabState.split('.')[0]) + '.0';
}

export function mapTabStateToSubLevel(tabState, prefix) {
    return prefix + (tabState.split('.')[1]);
}