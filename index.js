// Changing this `import` to `require` to fix problem of 'default not exported from execa.  called by run-applescript/index.js'
// import execa from 'execa';
const execa = require("execa");

export async function runAppleScriptAsync(script) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const { stdout } = await execa('osascript', ['-e', script]);
	return stdout;
}

export function runAppleScriptSync(script) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const { stdout } = execa.sync('osascript', ['-e', script]);
	return stdout;
}
