jest.mock('react-redux', () => {
    const mockDispatch = jest.fn((action) => action);
    return {
        connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
            mapStateToProps,
            mapDispatchToProps: (dispatch = mockDispatch, ownProps) => mapDispatchToProps(dispatch, { saveModalSelectedItems: jest.fn() }),
            ReactComponent
        }),
        Provider: ({ children }) => children
    }
})

jest.mock('@material-ui/core/styles', () => ({
    withStyles: styles => component => component
}));
