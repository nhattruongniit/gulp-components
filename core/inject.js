import path from 'path';
import injectToHTML from './injectToHTML';

/**
 * Inject assets to HTML.
 *
 * @param {Object} file
 * @param {Object} task
 *
 * @return {undefined}
 */

export default (file, task) => {
	const code = String(file.contents);
	const name = path.basename(file.path, path.extname(file.path));
	const page = task.store.pages[name];
	const injected = injectToHTML(code, page, task);

	file.contents = Buffer.from(injected);
};
