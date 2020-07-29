import { mainBundleTemplate } from './templates/files';

export default (task) => {
	const { config, mainBundle, paths, fs, log, c } = task;
	// const noBundleScripts = !config.build.bundles.includes('js');

	const extname = config.component.scripts.extension;
	const filename = paths.app(`${mainBundle}${extname}`);
	if (!fs.existsSync(filename)) {
		fs.writeFile(
			filename,
			mainBundleTemplate(mainBundle, config.component.scripts.syntax),
			(err) => {
				if (err) {
					log.error(c.redBright(err));
					return;
				}
				log.info(
					c.greenBright(
						`${mainBundle}${extname} is created in app folder`
					)
				);
			}
		);
	}
};
