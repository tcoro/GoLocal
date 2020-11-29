let SERVER_LINK: string;

if (process.env.NODE_ENV === 'development') {
    SERVER_LINK = 'http://localhost:3001'
    console.log('development')
} else {
    SERVER_LINK = ''
}

export { SERVER_LINK }