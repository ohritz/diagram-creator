export function mapTabStateToTopLevel(tabState) {
    return tabState.level1 + '.0';
}

export function mapTabStateToSubLevel(tabState, prefix) {
    return prefix + (tabState.split('.')[1]);
}