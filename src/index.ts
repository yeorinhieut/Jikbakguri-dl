// index.ts
import { isCancel, cancel, text } from '@clack/prompts';
import { text as clackText, spinner } from '@clack/prompts';
import { identifySite } from './utils/urlchecker';
import yakoDownload from './extractor/yako';
import av19Download from './extractor/av19';

const main = async () => {
    const value = await clackText({
        message: 'Enter the URL:',
    });

    if (isCancel(value)) {
        cancel('Operation cancelled.');
        process.exit(0);
    }

    const url: string = String(value).trim();
    const siteType = identifySite(url);

    if (!siteType) {
        console.error('Invalid or unsupported URL. Please enter a valid URL.');
        return;
    }

    const s = spinner();
    s.start('Downloading...');
    try {
        switch (siteType) {
            case 'yako':
                await yakoDownload(url);
                break;
            case 'av19':
                await av19Download(url);
                break;
            // Add more cases for other sites as needed
            // Example:
            // case 'example':
            //   await exampleDownload(url);
            //   break;
            default:
                console.error('Unsupported site. Please enter a valid URL.');
                break;
        }
        s.stop('Download successful!');
    } catch (error: any) {
        s.stop(`Download failed: ${error.message}`);
    }
};

main();
