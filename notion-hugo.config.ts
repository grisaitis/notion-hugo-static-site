import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://notion-hugo-static-site.pages.dev",
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/grisaitis/Notion-Hugo-1787936466ba804bb74fc38a6d9e5318',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
