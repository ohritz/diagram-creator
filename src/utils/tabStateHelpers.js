export function mapTabStateToTopLevel(tabState) {
    return (tabState.split('.')[0]) + '.0';
}