export const ErrorContainer = ({errorMessage}: { errorMessage: string }) => {
    if (!errorMessage) {
        return null;
    }
    return (
        <div className="row mt-3">
            <div className="col-6 offset-4">
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            </div>
        </div>
    )
}