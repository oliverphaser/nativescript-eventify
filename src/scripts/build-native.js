const { exec } = require('child_process');
const semver = require('semver');

exec('ns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`ns --version err: ${err}`);
        return;
    }

    const tnsVersion = semver.major(stdout);

    // execute 'ns plugin build' for {N} version > 8. This command builds .aar in platforms/android folder.
    if (tnsVersion >= 8) {
        console.log(`executing 'ns plugin build'`);
        exec('ns plugin build', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log(`${err}`);
                return;
            }
        });
    }
});
