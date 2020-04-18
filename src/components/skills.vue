<template>
    <li>
        <div class="my-auto">
            <div class="heading padding3rm">
                <h1 class="mb-0">{{ $t("menu.skills") }}</h1>
            </div>
            <div class="subheading mb-1">{{ $t("skills.basic") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/html.svg" data-toggle="tooltip"
                        data-placement="top" title="HTML">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/css.svg" data-toggle="tooltip"
                        data-placement="top" title="CSS">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/php.svg" data-toggle="tooltip"
                        data-placement="top" title="PHP">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/javascript.svg" data-toggle="tooltip"
                        data-placement="top" title="Javascript">
                </li>
            </ul>
            <div class="subheading mb-1">{{ $t("skills.backend") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/laravel.svg" data-toggle="tooltip"
                        data-placement="top" title="Laravel">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/codeigniter.png" data-toggle="tooltip"
                        data-placement="top" title="Codeigniter">
                </li>
            </ul>
            <div class="subheading mb-1">{{ $t("skills.frontend") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/vue.svg" data-toggle="tooltip"
                        data-placement="top" title="Vue Js">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/sass.svg" data-toggle="tooltip"
                        data-placement="top" title="Scss">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/bootstrap.png" data-toggle="tooltip"
                        data-placement="top" title="Bootstrap">
                </li>
            </ul>
            <div class="subheading mb-1">{{ $t("skills.package_manager") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/npm.svg" data-toggle="tooltip"
                        data-placement="top" title="Npm">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/gulp.svg" data-toggle="tooltip"
                        data-placement="top" title="Gulp">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/composer.png" data-toggle="tooltip"
                        data-placement="top" title="Composer">
                </li>
            </ul>
            <div class="subheading mb-1">{{ $t("skills.database") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/mariadb.png" data-toggle="tooltip"
                        data-placement="top" title="MariaDB">
                </li>
                <li class="list-inline-item">
                    <i class="devicons devicons-digital-ocean" data-toggle="tooltip" title=""
                        data-original-title="Digital Ocean"></i>
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/mysql.png" data-toggle="tooltip"
                        data-placement="top" title="Mysql">
                </li>
            </ul>
            <div class="subheading mb-1">{{ $t("skills.others") }}</div>
            <ul class="list-inline list-icons mb-3">
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/nodejs.svg" data-toggle="tooltip"
                        data-placement="top" title="Node Js">
                </li>
                <li class="list-inline-item">
                    <img class="setting_image" src="../assets/img/icon/docker.svg" data-toggle="tooltip"
                        data-placement="top" title="Docker">
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    name: 'skills'
}
</script>

<style>

</style>