
var app = angular.module('localize', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider,$rootScope) {
  $translateProvider.translations('en', {
    'USERS': 'USERS',
    'LANGUAGE':'Español'

  });

  $translateProvider.translations('es', {
    'CHARGE_OF_FILE':'Carga de archivo',
    'DATA_OF_FILE':'Datos del archivo',
    'REVISION':'Revisión',
    'VISIVILITY':'Visibilidad',
    'VIEW_LINK_RESOURCES':'Ver recursos asociados',
    'TITLE':'Título',
    'UNPUBLISH':'Despublicar',
    'NEW_RESOURCES':'Nuevo recurso',
    'PUBLISH':'Publicar',
    'PUBLISHED_AT':'Publicado en',
    'NO_VISIBLE':'Visible',
    'VISIBLE':'No visible',
    'MANDATARY':'* Este campo es obligatorio',
    'CREATED':'creó',
    'UPDATED':'actualizó',
    'MORE_INFO':'Más información',
    'DELETED':'borró',
    'AN':'un',
    'SELECT_TO':'Seleccione un {{resource}}',
    'SEARCH_BY':'Buscar por {{resource}}',
    'A':'una',
  	'DO_THIS_ACTION':'¿Estas seguro de hacer esta acción?',
    'INACTIVE':'Inactivo',
    'CREATED_AT':'Creado en',
    'SIGN_OUT':'Salir',
    'USERS': 'Usuarios',
    'UPDATED_AT':'Última Actualicación',
    'FREQUENCIES': 'Frecuencias de actualización',
    'LICENCE_BY_DEFAULT':'Licecia',
    'VISIBILITY_BY_DEFAULT':'Visibilidad',
    'CODIFY_BY_DEFAULT':'Codificación',
    'FREQUENCY_UPDATE':'Frecuencia de actualización',
    'FREQUENCY': 'Frecuencia de actualización',
    'CONFIG': 'Configuración por defecto',
    'FREQUENCY_MENU': 'Frecuencias',
    'ADD_FREQUENCY_MENU': 'Crear frecuencia',
    'ADD_FREQUENCY': 'Crear frecuencia de actualización',
    'VIEW_FREQUENCY': 'Ver frecuencias',
    'UPLOAD_FILE':'Subir Archivo',
    'SELECTE_ONE':'Seleccione uno',
    'USER': 'Usuario',
    'OWNER': 'Usuario responsable',
    'TAGS': 'Etiquetas',
    'SELECT':'Seleccionar',
    'TAG': 'Etiqueta',
    'ADD_TAG': 'Crear etiqueta',
    'VIEW_TAGS': 'Ver etiquetas',
    'STATE':'Estado',
    'URL':'Url',
    'TYPE':'Tipo',
    'ADDRESS':'Dirección',
    'ORGANIZATIONS': 'Organizaciones',
    'ORGANIZATION':'Organización',
    'CATEGORIES': 'Categorías',
    'CATEGORY':'Categoría',
    'STATUSES': 'Estados',
    'STATUS':'Estado',
    'FILE_TYPES': 'Tipos de archivos',
    'FILES': 'Archivos',
    'FILE': 'Archivo',
    'DATABASES': 'Bases de datos',
    'DATABASE': 'Base de datos',
    'NEXT':'Siguiente',
    'DATASETS': 'Set de datos',
    'DATASET': 'Set de Datos',
    'DOWNLOAD': 'Descargar',
    'ADD_USER': 'Crear Usuario',
    'VIEW_USERS': 'Ver Usuarios',
    'ADD_ORGANIZATIONS': 'Crear Organizaciones',
    'VIEW_ORGANIZATIONS': 'Ver Organizaciones',
    'ADD_CATEGORIES': 'Crear Categorías',
    'VIEW_CATEGORIES': 'Ver Categorías',
    'ADD_STATUSES': 'Crear estado',
    'VIEW_STATUSES': 'Ver estados',
    'ADD_FILETYPES': 'Crear Tipos de Archivos',
	'VIEW_FILETYPES':'Ver Tipos de Archivos',
	'ADD_FILES':'Crear Archivos',
	'VIEW_FILES':'Ver Archivos',
	'ADD_DATABASE':'Crear Bases de Datos',
	'VIEW_DATABASES':'Ver bases de datos',
	'ADD_DATASET':'Crear Set De Datos',
	'VIEW_DATASET':'Ver Set de datos',
	'ID':'Id',
	'NAME':'Nombre',
	'CREATED_BY':'Creado por',
	'ACTIVE':'Activo',
	'DESCRIPTION':'Descripción',
	'COLLECTION':'Colección',
	'ACTIONS':'Acciones',
	'VIEW':'Ver',
	'ADD':'Crear',
	'EDIT':'Editar',
	'DELETE':'Borrar',
	'BACK':'Atras',
	'SAVE':'Guardar',
	'DETAILS_FOR':'Detalles para',
	'NOTES':'Notas',
	'VISIBILITY':'Visibilidad',
	'STARRED':'Destacado',
	'ADD_OPTION':'Crear Opción',
	'THIS_FIELD_IS_REQUIRED':'Este campo es requerido',
	'THIS_FIELD_IS_TOO_SHORT':'Este campo es muy corto',
	'THIS_FIELD_IS_TOO_LONG':'Este campo es muy largo',
	'THIS_NEEDS_TO_BE_A_VALID_MAIL':'Este campo necesita ser un email válido',
	'LANGUAGE':'English',
	'USER_NAME':'Nombre de usuario',
	'EMAIL':'Correo Electrónico',
	'PASSWORD':'Contraseña',
	'ADD_NEW':'Crear Nuevo',
	'FIRST_NAME':'Nombre',
	'LAST_NAME':'Apellido',
	'ACTIVE':'Activo',
	'PLACE':'Escribe',
	'HERE':'Aquí',
    'COMPLETE':'Completado',
	'HOME':'Inicio',
    'OPTIONAL':'Opcional',
    'ADD_OPTION':'Crear Opción',
    'YES':'Si',
    'NO':'No',
    'SELECT_ONE':'Escribe una opción',
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
    'NEW_GRAPHIC': 'Agregar gráfico',
    'ADD_PROPERTY': 'Agregar propiedad',
    'PROPERTY': 'Propiedad',
  });
 console.log($rootScope);
  $translateProvider.preferredLanguage('es');
}]);

  app.controller("localizeController", function($scope) {
  	console.log($scope)

  });
