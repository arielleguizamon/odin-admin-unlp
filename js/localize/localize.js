var app = angular.module('localize', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider, $rootScope) {
    $translateProvider.translations('en', {
        'USERS': 'Users',
        'LANGUAGE': 'Spanish',
        'CHARGE_OF_FILE': 'File upload',
        'DATA_OF_FILE': 'Data file',
        'REVISION': 'Revision',
        'VISIVILITY': 'Visibility',
        'VIEW_LINK_RESOURCES': 'Associated resources',
        'TITLE': 'Title',
        'UNPUBLISH': 'Unpublish',
        'NEW_RESOURCES': 'New resource',
        'PUBLISH': 'Publish',
        'PUBLISHED_AT': 'Published at',
        'NO_VISIBLE': 'Visible',
        'VISIBLE': 'Invisible',
        'MANDATARY': '* This field is required',
        'CREATED': 'Created',
        'UPDATED': 'Updated',
        'MORE_INFO': 'More info',
        'DELETED': 'Deleted',
        'AN': 'an',
        'SELECT_TO': 'Select to {{resource}}',
        'SEARCH_BY': 'Search by {{resource}}',
        'A': 'a',
        'DO_THIS_ACTION': 'Are you sure you want to perfom this action?',
        'INACTIVE': 'Inactive',
        'CREATED_AT': 'Created at',
        'SIGN_OUT': 'Sign out',
        'UPDATED_AT': 'Updated at',
        'FREQUENCIES': 'Frequencies',
        'LICENCE_BY_DEFAULT': 'Licence',
        'VISIBILITY_BY_DEFAULT': 'Visibility',
        'CODIFY_BY_DEFAULT': 'Codify',
        'FREQUENCY_UPDATE': 'Update frequency',
        'FREQUENCY': 'Fequency',
        'CONFIG': 'Configurations',
        'FREQUENCY_MENU': 'Frequencies',
        'ADD_FREQUENCY_MENU': 'Add frequency',
        'ADD_FREQUENCY': 'Add frequency',
        'VIEW_FREQUENCY': 'View frequencies',
        'UPLOAD_FILE': 'File upload',
        'SELECTE_ONE': 'Select one',
        'USER': 'User',
        'OWNER': 'Owner',
        'TAGS': 'Tags',
        'SELECT': 'Select',
        'TAG': 'Tag',
        'ADD_TAG': 'Add tag',
        'VIEW_TAGS': 'View tags',
        'STATE': 'State',
        'URL': 'URL',
        'TYPE': 'Type',
        'ADDRESS': 'Address',
        'ORGANIZATIONS': 'Organizations',
        'ORGANIZATION': 'Organization',
        'CATEGORIES': 'Categories',
        'CATEGORY': 'Category',
        'STATUSES': 'Statuses',
        'STATUS': 'Status',
        'FILE_TYPES': 'File types',
        'FILES': 'Files',
        'FILE': 'File',
        'DATABASES': 'Databases',
        'DATABASE': 'Database',
        'NEXT': 'Next',
        'DATASETS': 'Datasets',
        'DATASET': 'Dataset',
        'DOWNLOAD': 'Download',
        'ADD_USER': 'Add user',
        'VIEW_USERS': 'View users',
        'ADD_ORGANIZATIONS': 'Add organization',
        'VIEW_ORGANIZATIONS': 'View organizations',
        'ADD_CATEGORIES': 'Add category',
        'VIEW_CATEGORIES': 'View categories',
        'ADD_STATUSES': 'Add status',
        'VIEW_STATUSES': 'View statuses',
        'ADD_FILETYPES': 'Add filetype',
        'VIEW_FILETYPES': 'View filetypes',
        'ADD_FILES': 'Add file',
        'NEW_FILES': 'New file',
        'VIEW_FILES': 'View files',
        'VIEW_LINK_FILES': 'View associated files',
        'ADD_DATABASE': 'Add database',
        'VIEW_DATABASES': 'View databases',
        'ADD_DATASET': 'Add dataset',
        'VIEW_DATASET': 'View dataset',
        'VIEW_STARRED_DATASET': 'View starred datasets',
        'ID': 'Id',
        'NAME': 'Name',
        'CREATED_BY': 'Created by',
        'ACTIVE': 'Active',
        'DESCRIPTION': 'Description',
        'COLLECTION': 'Collection',
        'ACTIONS': 'Actions',
        'VIEW': 'View',
        'ADD': 'Add',
        'EDIT': 'Edit',
        'DELETE': 'Delete',
        'BACK': 'Back',
        'SAVE': 'Save',
        'DETAILS_FOR': 'Details for',
        'NOTES': 'Notes',
        'VISIBILITY': 'Visibility',
        'STARRED': 'Starred',
        'ADD_OPTION': 'Add option',
        'THIS_FIELD_IS_REQUIRED': 'This field is required',
        'THIS_FIELD_IS_TOO_SHORT': 'This field is too short',
        'THIS_FIELD_IS_TOO_LONG': 'This field is too long',
        'THIS_NEEDS_TO_BE_A_VALID_MAIL': 'This field needs to be a valid email',
        'USER_NAME': 'Username',
        'EMAIL': 'Email',
        'PASSWORD': 'Password',
        'ADD_NEW': 'Add',
        'FIRST_NAME': 'First name',
        'LAST_NAME': 'Last name',
        'PLACE': 'Place',
        'HERE': 'Here',
        'COMPLETE': 'Complete',
        'HOME': 'Home',
        'OPTIONAL': 'Optional',
        'YES': 'Yes',
        'NO': 'No',
        'SELECT_ONE': 'Select one',
        'MAP': 'Map',
        'MAPS': 'Maps',
        'VIEW_MAPS': 'View maps',
        'ADD_MAPS': 'Add map',
        'DATA_OF_MAP': 'Map data',
        'SELECT_FIELDS': 'Select fields',
        'NEW_MAP': 'Add map',
        'ACTIVATE': 'Activate',
        'DEACTIVATE': 'Deactivate',
        'COLOR': 'Color',
        'IMAGE': 'Image',
        'NEW_CHART': 'Add chart',
        'ADD_PROPERTY': 'Add property',
        'PROPERTY': 'Property',
        'BASE_MAP': 'Basemap',
        'CHARTS': 'Charts',
        'CHART': 'Chart',
        'VIEW_CHARTS': 'View charts',
        'CHART_TYPES': 'Chart types',
        'DATA_OF_CHART': 'Chart data',
        'CHART_TYPE': 'Chat type',
        'LATITUDE': 'Latitude',
        'LONGITUDE': 'Longitude',
        'RESOURCES': 'Resources',
        'RESOURCE': 'Resource',
        'GATHERING_DATE': 'Gathering date',
        'BASEMAPS': 'Basemaps',
        'VIEW_BASEMAPS': 'View basemaps',
        'ADD_BASEMAPS': 'Add basemap',
        'BASEMAP': 'Basemap',
        'ELEMENT': 'Element',
        'CHART_SUBTYPE': 'Logic',
        'LATEST_UPDATES': 'Latest updates',
        'UPDATED_VIEW': 'Updated views',
        'PREVIEW_OF': 'Preview of',
        'PREVIEW': 'Preview',
        'bar': 'Bar',
        'line': 'Line',
        'pie': 'Pie',
        'qualitative': 'Qualitative',
        'quantitative': 'Quantitative',
        'INACTIVATE': 'Inactivate',
        'CONFIRM_PASSWORD': 'Confirm password',
        'ERROR_CONFIRM_PASS': 'Password not matching',
        'ERROR_PASS': 'Password must be at least: 8 characters and at most 20 characters.',
        'IMPORTER': 'Importer',
        'IMPORT': 'Import',
        'CKAN_IMPORTER': 'CKAN Importer',
        'IMPORT_RESULTS': 'Import results',
        'RESULTS': 'Results',
        'IMPORT_MODULES': 'Import modules',
        'LAYOUT': 'Layout',
        'ADD_PARAMETER': 'Add parameter',
        'PARAMETER': 'Parameter',
        'TITLE_PATH': 'Titles path',
        'USE_ATTRS_HEADERS': 'Use attributes as headers',
        'UNDER_REVIEW': 'Under review',
        'REJECT': 'Reject',
        'ROLE': 'Role',
        'SUBCATEGORY': 'Subcategory',
        'SUBCATEGORIES': 'Subcategories',
        'VIEW_LINK_SUBCATEGORIES': 'View associated subcategories',
        'MY_PROFILE': 'My profile',
        'DENIED_ACCESS': 'Denied access',
        'RELATIONSHIPS': 'Relationships',
        'VIEW_LINK_RELATIONSHIPS': 'View relationships',
        'superadmin': 'SuperAdmin',
        'admin': 'Admin',
        'guest': 'Guest',
        'VALUE': 'Value',
        'AUTHOR': 'Author',
        'PARENT_CATEGORY': 'Parent category',
        'UNPUBLISHED_AT': 'Unpublished at',
        'REJECTED_AT': 'Rejected at',
        'CANCELLED_AT': 'Cancelled at',
        'REVIEWED_AT': 'Reviewed at',
        'SEND_TO_REVIEW': 'Send to review',
        'CANCEL': 'Cancel review',
        'STARRED_DATASETS': 'Starred datasets',
        'ADD_SUBCATEGORY': 'Add subcategory',
        'ACTIVE_INACTIVE': 'Active/Inactive',
        'SITE_CONFIGS': 'Site configurations',
        'INTEGRATIONS': 'Integrations',
        'Social networks': 'Social networks',
        'Google Analytics Account': 'Google Analytics Account',
        'Account where the statistics will be shown': 'Account where the statistics will be shown',
        'Disqus mobile': 'Disqus mobile',
        'Enable/disable disqus mobile': 'Enable/disable disqus mobile',
        'Language': 'Language',
        'Choose a particular language (Browser language by default)': 'Choose a particular language (Browser language by default)',
        'Disqus Public Key': 'Disqus Public Key',
        'Disqus Public Key provided through its administration panel, depends on disqusRemoteAuthS3 ﬁeld': 'Disqus Public Key provided through its administration panel, depends on disqusRemoteAuthS3 ﬁeld',
        'Authentication format': 'Authentication format',
        'Authentication format provided by Disqus through its administration panel, depends on disquisApiKey ﬁeld': 'Authentication format provided by Disqus through its administration panel, depends on disquisApiKey ﬁeld',
        'ReCaptcha Private Key': 'ReCaptcha Private Key',
        'Google Private API KEY': 'Google Private API KEY',
        'ReCaptcha Public Key': 'ReCaptcha Public Key',
        'Google Public API KEY': 'Google Public API KEY',
        'ReCaptcha Frontend captcha': 'ReCaptcha Frontend captcha',
        'ReCaptcha Admin captcha': 'ReCaptcha Admin captcha',
        'Logged models': 'Logged models',
        'Split with commas for more than one entity': 'Split with commas for more than one entity',
        'Default optionals': 'Default optionals',
        'Split with commas for more than one field': 'Split with commas for more than one field',
        'Default status': 'Default status',
        'Frontend pagination': 'Frontend pagination',
        'Admin pagination': 'Admin pagination',
        'Frontend Url': 'Frontend url',
        'Points limit': 'Points limit',
        'Points limit on map creation': 'Points limit on map creation',
        'Max zoom': 'Max zoom',
        'Max zoom on basemap creation': 'Max zoom on basemap creation',
        'Min zoom': 'Min zoom',
        'Min zoom on basemap creation': 'Min zoom on basemap creation',
        'Default organization': 'Default organization',
        'CONFIGS': 'Configurations',
        'UPDATEFREQUENCIES': 'Update frequencies',
        'FILETYPES': 'Filetypes',
        'UPDATEFREQUENCY': 'Update frequency',
        'FILETYPE': 'Filetype',
        'MIMETYPE': 'Mimetype'
        
    });

    $translateProvider.translations('es', {
        'CHARGE_OF_FILE': 'Carga de recurso',
        'DATA_OF_FILE': 'Datos del recurso',
        'REVISION': 'Revisión',
        'VISIVILITY': 'Visibilidad',
        'VIEW_LINK_RESOURCES': 'Ver recursos asociados',
        'VIEW_LINK_VISUALIZATIONS': 'Ver visualizaciones asociadas',
        'TITLE': 'Título',
        'UNPUBLISH': 'Despublicar',
        'NEW_RESOURCES': 'Nueva visualización',
        'PUBLISH': 'Publicar',
        'PUBLISHED_AT': 'Fecha de publicación',
        'NO_VISIBLE': 'Visible',
        'VISIBLE': 'No visible',
        'MANDATARY': '* Este campo es obligatorio',
        'CREATED': 'creó',
        'UPDATED': 'actualizó',
        'MORE_INFO': 'Más información',
        'DELETED': 'borró',
        'AN': 'un',
        'SELECT_TO': 'Seleccione un {{resource}}',
        'SEARCH_BY': 'Buscar por {{resource}}',
        'A': 'una',
        'DO_THIS_ACTION': '¿Estas seguro de hacer esta acción?',
        'INACTIVE': 'Inactivo',
        'CREATED_AT': 'Fecha de creación',
        'SIGN_OUT': 'Salir',
        'USERS': 'Usuarios',
        'UPDATED_AT': 'Fecha de actualización',
        'FREQUENCIES': 'Frecuencias de actualización',
        'LICENCE_BY_DEFAULT': 'Licecia',
        'VISIBILITY_BY_DEFAULT': 'Visibilidad',
        'CODIFY_BY_DEFAULT': 'Codificación',
        'FREQUENCY_UPDATE': 'Frecuencia de actualización',
        'FREQUENCY': 'Frecuencia de actualización',
        'CONFIG': 'Configuraciones',
        'FREQUENCY_MENU': 'Frecuencias',
        'ADD_FREQUENCY_MENU': 'Crear frecuencia',
        'ADD_FREQUENCY': 'Crear frecuencia de actualización',
        'VIEW_FREQUENCY': 'Ver frecuencias',
        'UPLOAD_FILE': 'Subir archivo',
        'SELECTE_ONE': 'Seleccione uno',
        'USER': 'Usuario',
        'OWNER': 'Usuario responsable',
        'TAGS': 'Etiquetas',
        'SELECT': 'Seleccionar',
        'TAG': 'Etiqueta',
        'ADD_TAG': 'Crear etiqueta',
        'VIEW_TAGS': 'Ver etiquetas',
        'STATE': 'Estado',
        'URL': 'URL',
        'TYPE': 'Tipo',
        'ADDRESS': 'Dirección',
        'ORGANIZATIONS': 'Organizaciones',
        'ORGANIZATION': 'Organización',
        'CATEGORIES': 'Categorías',
        'CATEGORY': 'Categoría',
        'STATUSES': 'Estados',
        'STATUS': 'Estado',
        'FILE_TYPES': 'Tipos de archivos',
        'FILE_TYPE': 'Tipo de archivo',
        'FILES': 'Recursos',
        'FILE': 'Recurso',
        'DATABASES': 'Bases de datos',
        'DATABASE': 'Base de datos',
        'NEXT': 'Siguiente',
        'DATASETS': 'Datasets',
        'DATASET': 'Dataset',
        'DOWNLOAD': 'Descargar',
        'ADD_USER': 'Crear usuario',
        'VIEW_USERS': 'Ver usuarios',
        'ADD_ORGANIZATIONS': 'Crear organizaciones',
        'ADD_ORGANIZATION': 'Crear organización',
        'VIEW_ORGANIZATIONS': 'Ver organizaciones',
        'ADD_CATEGORIES': 'Crear categorías',
        'ADD_CATEGORY': 'Crear categoría',
        'VIEW_CATEGORIES': 'Ver categorías',
        'ADD_STATUSES': 'Crear estado',
        'VIEW_STATUSES': 'Ver estados',
        'ADD_FILETYPES': 'Crear tipo de archivo',
        'VIEW_FILETYPES': 'Ver tipos de archivos',
        'ADD_FILES': 'Crear recursos',
        'ADD_FILE': 'Crear recurso',
        'NEW_FILES': 'Nuevo recurso',
        'VIEW_FILES': 'Ver recursos',
        'VIEW_LINK_FILES': 'Ver recursos asociados',
        'ADD_DATABASE': 'Crear bases de datos',
        'VIEW_DATABASES': 'Ver bases de datos',
        'ADD_DATASET': 'Crear dataset',
        'VIEW_DATASET': 'Ver dataset',
        'VIEW_STARRED_DATASET': 'Ver datasets destacados',
        'ID': 'Id',
        'NAME': 'Nombre',
        'CREATED_BY': 'Creado por',
        'ACTIVE': 'Activo',
        'DESCRIPTION': 'Descripción',
        'COLLECTION': 'Colección',
        'ACTIONS': 'Acciones',
        'VIEW': 'Ver',
        'ADD': 'Crear',
        'EDIT': 'Editar',
        'DELETE': 'Borrar',
        'BACK': 'Atras',
        'SAVE': 'Guardar',
        'DETAILS_FOR': 'Detalles para',
        'NOTES': 'Notas',
        'VISIBILITY': 'Visibilidad',
        'STARRED': 'Destacado',
        'ADD_OPTION': 'Crear opción',
        'THIS_FIELD_IS_REQUIRED': 'Este campo es requerido',
        'THIS_FIELD_IS_TOO_SHORT': 'Este campo es muy corto',
        'THIS_FIELD_IS_TOO_LONG': 'Este campo es muy largo',
        'THIS_NEEDS_TO_BE_A_VALID_MAIL': 'Este campo necesita ser un email válido',
        'LANGUAGE': 'English',
        'USER_NAME': 'Nombre de usuario',
        'EMAIL': 'Correo electrónico',
        'PASSWORD': 'Contraseña',
        'ADD_NEW': 'Crear nuevo',
        'FIRST_NAME': 'Nombre',
        'LAST_NAME': 'Apellido',
        'PLACE': 'Escribe',
        'HERE': 'Aquí',
        'COMPLETE': 'Completado',
        'HOME': 'Inicio',
        'OPTIONAL': 'Opcional',
        'YES': 'Si',
        'NO': 'No',
        'SELECT_ONE': 'Escribe una opción',
        'MAP': 'Mapa',
        'MAPS': 'Mapas',
        'VIEW_MAPS': 'Ver mapas',
        'ADD_MAPS': 'Agregar mapas',
        'DATA_OF_MAP': 'Datos del mapa',
        'SELECT_FIELDS': 'Elección de campos',
        'NEW_MAP': 'Agregar mapa',
        'ACTIVATE': 'Activar',
        'DEACTIVATE': 'Desactivar',
        'COLOR': 'Color',
        'IMAGE': 'Imagen',
        'NEW_CHART': 'Agregar gráfico',
        'ADD_PROPERTY': 'Agregar propiedad',
        'PROPERTY': 'Propiedad',
        'BASE_MAP': 'Mapa base',
        'CHARTS': 'Gráficos',
        'CHART': 'Gráfico',
        'VIEW_CHARTS': 'Ver gráficos',
        'CHART_TYPES': 'Tipos de gráfico',
        'DATA_OF_CHART': 'Datos del gráfico',
        'CHART_TYPE': 'Tipo de gráfico',
        'LATITUDE': 'Latitud',
        'LONGITUDE': 'Longitud',
        'RESOURCES': 'Recursos',
        'RESOURCE': 'Recurso',
        'VISUALIZATIONS': 'Visualizaciones',
        'VISUALIZATION': 'Visualización',
        'GATHERING_DATE': 'Relevamiento de datos',
        'BASEMAPS': 'Mapas base',
        'VIEW_BASEMAPS': 'Ver mapas base',
        'ADD_BASEMAPS': 'Crear mapa base',
        'BASEMAP': 'Mapa base',
        'ELEMENT': 'Elemento',
        'CHART_SUBTYPE': 'Lógica',
        'LATEST_UPDATES': 'Últimas actualizaciones',
        'UPDATED_VIEW': 'Mostrar en actualizaciones',
        'PREVIEW_OF': 'Previsualización de',
        'PREVIEW': 'Previsualizar',
        'bar': 'Barra',
        'line': 'Línea',
        'pie': 'Torta',
        'qualitative': 'Cualitativo',
        'quantitative': 'Cuantitativo',
        'ACTIVATE': 'Activar',
        'INACTIVATE': 'Desactivar',

        'CONFIRM_PASSWORD': 'Confirmar contraseña',
        'ERROR_CONFIRM_PASS': 'Las contraseñas no son iguales',
        'ERROR_PASS': 'La contraseña debe cumplir con: 8 caracteres mínimo; 20 caracteres máximo; letras, números y símbolos.',


        'IMPORTER': 'Importador',
        'IMPORT': 'Importar',
        'CKAN_IMPORTER': 'Importador CKAN',
        'IMPORT_RESULTS': 'Resultados de la importación',
        'RESULTS': 'Resultados',
        'IMPORT_MODULES': 'Módulos a importar',
        'ATTACH_FILE': 'Adjuntar archivo',
        'ATTACH_IMAGE': 'Adjuntar imagen',
        'FROM_FILE': 'A partir de un archivo',
        'FROM_WEBSERVICE': 'A partir de un servicio web',
        'WEBSERVICE': 'Servicio web',
        'CHARGE_OF_WEBSERVICE': 'Carga del servicio web',
        'CHARGE_OF_DATA': 'Carga de datos',
        'WEBSERVICE_URL': 'Dirección al servicio web',
        'WEBSERVICE_TYPE': 'Tipo de servicio web',
        'SELECT_OPTION': 'Elije una opción',
        'USER_MANUAL': 'Manual de usuario',
        'VIEW_DATASETS': 'Ver datasets',
        'TOKEN': 'Token',
        'USER_PASSWORD': 'Usuario y contraseña',
        'WRITE': 'Escriba',
        'FIRM_NAME': 'Nombre de la firma',
        'HERE': 'aqui',
        'TOKEN_FOR_FIRM': 'Token para la firma',
        'ALGORITHM_FOR_FIRM': 'Algoritmo para la firma',
        'METHOD': 'Método',
        'NAMESPACE': 'Nombre de espacio',
        'USE_ATTRS_HEADERS': 'Usar atributos como cabeceras',
        'DATA_URL': 'Ruta a los datos',
        'AUTH_TYPE': 'Forma de autenticación',
        'LAYOUT': 'Guía de datos',

        'ADD_PARAMETER': 'Agregar parámetro',
        'PARAMETER': 'Parámetro',
        'TITLE_PATH': 'Ruta a los titulos de tabla',
        'MIN': 'Mínimo',
        'MAX': 'Máximo',
        'ATTRIBUTION': 'Attribution',
        'UNDER_REVIEW': 'En revisión',
        'REJECT': 'Rechazar',
        'ROLE': 'Rol',
        'SUBCATEGORY': 'Subcategoría',
        'SUBCATEGORIES': 'Subcategorías',
        'VIEW_LINK_SUBCATEGORIES': 'Ver subcategorías asociadas',
        'MY_PROFILE': 'Mi perfil',
        'DENIED_ACCESS': 'Acceso denegado',
        'RELATIONSHIPS': 'Entidades relacionadas',
        'VIEW_LINK_RELATIONSHIPS': 'Ver entidades relacionadas',
        'superadmin': 'SuperAdmin',
        'admin': 'Admin', 
        'guest': 'Invitado',
        'VALUE': 'Valor',
        'AUTHOR': 'Autor',
        'PARENT_CATEGORY': 'Categoría padre',
        'UNPUBLISHED_AT': 'Fecha de despublicación',
        'REJECTED_AT': 'Fecha de rechazo',
        'CANCELLED_AT': 'Fecha de cancelación',
        'REVIEWED_AT': 'Fecha de revisión',
        'SEND_TO_REVIEW': 'Enviar a revisión',
        'CANCEL': 'Cancelar revisión',
        'STARRED_DATASETS': 'Datasets destacados',
        'ADD_SUBCATEGORY': 'Crear subcategoría',
        'ACTIVE_INACTIVE': 'Activo/Inactivo',
        'SITE_CONFIGS': 'Configuraciones del sitio',
        'INTEGRATIONS': 'Integraciones',
        
        'Social networks': 'Redes sociales',
        'Google Analytics Account': 'Cuenta de Google Analytics',
        'Account where the statistics will be shown': 'Es la cuenta desde la cual se visualizan las estadísticas.',
        'Disqus mobile': 'Disqus mobile',
        'Enable/disable disqus mobile': 'Check que permite habilitar/ deshabilitar el disqus mobile',
        'Language': 'Lenguaje',
        'Choose a particular language (Browser language by default)': 'Permite elegir un lenguaje en particular (por defecto toma el lenguaje del navegador)',
        'Disqus Public Key': 'Clave pública',
        'Disqus Public Key provided through its administration panel, depends on disqusRemoteAuthS3 ﬁeld': 'Clave pública provista por Disqus desde el panel de administración del mismo. Campo dependiente de RemoteAuthS3',
        'Authentication format': 'Formato de autenticación',
        'Authentication format provided by Disqus through its administration panel, depends on disquisApiKey ﬁeld': 'Formato de autenticación provisto por Disqus desde el panel de administración del mismo. Campo dependiente de disquisApiKey',
        'ReCaptcha Private Key': 'Clave privada',
        'Google Private API KEY': 'Clave privada de la API de Google',
        'ReCaptcha Public Key': 'Clave pública',
        'Google Public API KEY': 'Clave pública de la API de Google',
        'ReCaptcha Frontend captcha': 'Captcha en el frontend',
        'ReCaptcha Admin captcha': 'Captcha en el administador',
        'Logged models': 'Modelos logueados',
        'Split with commas for more than one entity': 'Para añadir más de una entidad, deberá separarlos por coma',
        'Default optionals': 'Opcionales por defecto',
        'Split with commas for more than one field': 'Para añadir más de un campo, deberá separarlos por coma',
        'Default status': 'Estado por defecto',
        'Frontend pagination': 'Paginación en el frontend',
        'Admin pagination': 'Paginación en el Admin',
        'Frontend Url': 'Url asociada al frontend',
        'Points limit': 'Límite de puntos',
        'Points limit on map creation': 'Límite de puntos para la creación de mapas',
        'Max zoom': 'Zoom máximo',
        'Max zoom on basemap creation': 'Zoom máximo en la creación de mapas base',
        'Min zoom': 'Zoom mínimo',
        'Min zoom on basemap creation': 'Zoom mínimo en la creación de mapas base',
        'Default organization': 'Organización por defecto',
        'CONFIGS': 'Configuraciones',
        'UPDATEFREQUENCIES': 'Frecuencias de actualización',
        'FILETYPES': 'Tipos de archivos',
        'UPDATEFREQUENCY': 'Frecuencia de actualización',
        'FILETYPE': 'Tipo de archivo',
        'MIMETYPE': 'Mimetype'
    });
    $translateProvider.preferredLanguage('es');
}]);

app.controller("localizeController", function($scope) {

});
