const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

export const ApiConfig = {
	authentication: BASE_URL + process.env.AUTHENTICATION_PATH,
	video: BASE_URL + process.env.VIDEO_PATH,
	youtube: BASE_URL + process.env.YOUTUBE_PATH,
}