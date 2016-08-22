import * as fs from 'fs';

export default function uptime(f?: string):number {

    const uptime = fs.readFileSync('/proc/uptime', 'utf-8').split(' ')[0]

    let time: number;

    if (f) {

        switch (f) {

            case 'seconds':
                time = parseInt(uptime)
                break;

            case 'milliseconds':
                time = parseFloat(uptime) * 1000
                break;

        }

    } else {
        time = parseInt(uptime)
    }

    return time
}
