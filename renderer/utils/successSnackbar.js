import { enqueueSnackbar } from 'notistack'

export const showSuccessSnackbar = message => {
	enqueueSnackbar(message, { variant: 'success', hideIconVariant: true })
}
